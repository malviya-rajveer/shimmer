import { Gallery } from "@/components/Gallery";
import { GridSectiom } from "@/components/gridSection";
import { HeroSection } from "@/components/heroSection";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-clip bg-zinc-50">
      <Navbar></Navbar>
      <HeroSection />
      <Gallery></Gallery>
      <GridSectiom></GridSectiom>
    </div>
  );
}
