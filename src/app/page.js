import dynamic from 'next/dynamic'
import HeroSection from "@/components/herosection/HeroSection";
const Stats = dynamic(() => import("@/components/stats/Stats"))
const Faq = dynamic(() => import("@/components/faq/Faq"))
const GetInTouch = dynamic(() => import("@/components/contact/GetInTouch"))


export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Faq />
      <GetInTouch />
    </>
  );
}
