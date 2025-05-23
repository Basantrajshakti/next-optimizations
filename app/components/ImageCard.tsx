"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCardProps {
  photo: {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    photographer: string;
    photographerUrl: string;
  };
  priority?: boolean;
}

export default function ImageCard({ photo, priority = false }: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div key={photo.id} className="break-inside-avoid rounded-lg overflow-hidden shadow-md">
      <div className={`relative w-full aspect-[3/4] bg-gray-200 dark:bg-gray-700 ${!isLoaded ? "animate-pulse" : ""}`}>
        <Image
          src={photo.image}
          alt={photo.alt}
          fill
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="text-lg font-semibold mb-1">{photo.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{photo.description}</p>
        <a href={photo.photographerUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-purple-600 hover:underline">
          Photo by {photo.photographer}
        </a>
      </div>
    </div>
  );
}
