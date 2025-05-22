"use client";

import { useEffect } from "react";

export default function ClientFontLoader() {
  useEffect(() => {
    const handleScroll = () => {
      const existing = document.getElementById("font-preload-link");
      if (!existing) {
        const link = document.createElement("link");
        link.id = "font-preload-link";
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Inter:wght@400;500;600;700&family=Lobster&family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Anton&family=Bebas+Neue&family=Charm:wght@400;700&family=Cinzel:wght@400;700&family=Comfortaa:wght@300;400;700&family=Courgette&family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Dosis:wght@200;400;700&family=Great+Vibes&family=Indie+Flower&family=Josefin+Sans:ital,wght@0,300;0,400;0,700;1,400&family=Kalam:wght@300;400;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,300;0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&family=Oswald:wght@200;400;700&family=Poppins:ital,wght@0,300;0,400;0,700;1,400&family=Quicksand:wght@300;400;700&family=Raleway:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,700;1,400&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,400&family=Roboto+Slab:wght@300;400;700&family=Rubik:ital,wght@0,300;0,400;0,700;1,400&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,700;1,400&family=Space+Grotesk:wght@300;400;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Ubuntu:ital,wght@0,300;0,400;0,700;1,400&family=Work+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap";
        document.head.appendChild(link);
      }
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
