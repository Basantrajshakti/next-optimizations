"use client";

import { useCallback, useState } from "react";
import PromptInput from "../components/PromptInput";
import GeneratedImage from "../components/GeneratedImage";
import Link from "next/link";
import { createClient } from "pexels";

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY!);

export default function Demo() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt) return;

    setIsGenerating(true);

    try {
      const response = await client.photos.search({
        query: prompt,
        per_page: 1,
      });

      if ("error" in response || !response.photos.length) {
        throw new Error("No results found");
      }

      const imageUrl = response.photos[0].src.large2x;
      setGeneratedImage(imageUrl);
    } catch (err) {
      console.error("Failed to generate image:", err);
      setGeneratedImage(null);
    } finally {
      setIsGenerating(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 mt-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Try MagicMoments</h1>

        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <PromptInput prompt={prompt} setPrompt={setPrompt} isGenerating={isGenerating} onGenerate={handleGenerate} />

          {generatedImage && <GeneratedImage imageUrl={generatedImage} />}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Want to create more? Check out our{" "}
            <Link prefetch={false} href="/pricing" className="text-purple-600 hover:underline">
              pricing plans
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
