import { About } from "@/components/landing/about";
import { Featured } from "@/components/landing/featured";
import Footer from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Testimonials } from "@/components/landing/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <Testimonials />
      <Footer />
    </>
  );
}
