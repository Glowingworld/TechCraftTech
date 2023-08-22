import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";
import CompanyItroduction from "components/CompanyIntroduction";
import Values from "../components/Values/index";
const inter = Inter({ subsets: ["latin"] });
import CallToAction from "../components/CallToAction";
export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <CompanyItroduction />
      <Values />
      <Features />
      <Brands />
      <Testimonials />
      <CallToAction />
    </>
  );
}
