import { About } from "@/components/landing/about";
import { Featured } from "@/components/landing/featured";
import { Hero } from "@/components/landing/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
    </>
  );
}
