import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/Hero"));
const Features = dynamic(() => import("./components/Features"));
const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false });
const FontShowcase = dynamic(() => import("./components/FontShowcase"), { ssr: false });

const features = [
  {
    title: "AI-Powered Generation",
    description: "Create unique illustrations and logos in seconds using advanced AI technology",
  },
  {
    title: "Professional Quality",
    description: "Get high-resolution, print-ready artwork suitable for any project",
  },
  {
    title: "Easy to Use",
    description: "Simple text prompts transform into beautiful artwork with just a few clicks",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features features={features} />
      <FontShowcase />
      <Gallery />
    </div>
  );
}
