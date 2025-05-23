"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "pexels";
import ImageCard from "../components/ImageCard";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  photographer: string;
  photographerUrl: string;
}

const PER_PAGE = 12;
const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY!);

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const hasNextPage = useRef(true);

  const fetchPhotos = async () => {
    if (loading || !hasNextPage.current || error) return;

    setLoading(true);
    try {
      const response = await client.photos.search({
        query: "ai generated art",
        per_page: PER_PAGE,
        page,
      });

      if ("error" in response) throw new Error(response.error);

      if (response.photos.length < PER_PAGE) {
        hasNextPage.current = false;
      }

      const newPhotos = response.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt || "Untitled",
        description: photo.alt || "AI generated artwork",
        image: photo.src.large2x,
        alt: photo.alt || "AI artwork",
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
      }));

      setPhotos((prev) => [...prev, ...newPhotos]);
      setPage((prev) => prev + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(); // initial load
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchPhotos();
        }
      },
      { rootMargin: "200px" }
    );

    const el = observerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [fetchPhotos, loading]);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Gallery</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">Explore our collection of AI-generated artwork</p>

        {error ? (
          <div className=" bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-500 mb-4">Error: {error}</p>
              <button onClick={() => location.reload()} className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Try Again
              </button>
            </div>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <ImageCard key={photo.id} photo={photo} priority={i === 0} />
            ))}
          </div>
        )}

        {loading && !error && (
          <div className="mt-10 flex justify-center">
            <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div ref={observerRef} className="h-10" />
      </div>
    </section>
  );
}
