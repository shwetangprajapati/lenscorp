import dynamic from 'next/dynamic'
import HeroView from '@/components/herosection/HeroView';
const Stats = dynamic(() => import("@/components/stats/Stats"))
const Faq = dynamic(() => import("@/components/faq/Faq"))
const GetInTouch = dynamic(() => import("@/components/contact/GetInTouch"))
const ChooseLens = dynamic(() => import("@/components/chooselens/ChooseLens"))
const TruAI = dynamic(() => import("@/components/truai/TruAI"))
const OurClients = dynamic(() => import("@/components/clients/OurClients"))
const Services = dynamic(() => import("@/components/services/Services"))
const AboutHome = dynamic(() => import('@/components/about/AboutHome'))
const Vision = dynamic(() => import('@/components/vision/Vision'))


export default function Home() {
  return (
    <>
      <HeroView />
      <AboutHome />
      <Services />
      <TruAI />
      <ChooseLens />
      <Vision />
      <OurClients />
      <Stats />
      <Faq />
      <GetInTouch />
    </>
  );
}
