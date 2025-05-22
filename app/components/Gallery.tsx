"use client";

import Image from "next/image";

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
            <div key={num} className="relative w-auto h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Image src={`/${num}.png`} alt={`Gallery Image ${num}`} height={300} width={300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
