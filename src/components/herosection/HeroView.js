"use client"
import useLight from '@/customhooks/useLight';
import HeroSection from './HeroSection';
import HeroVideoSection from './HeroVideoSection';


const HeroView = () => {
  const currentTheme = useLight();

  return (
    <>
      {currentTheme === "dark" ? <HeroVideoSection /> : <HeroSection />}
    </>
  )

}

export default HeroView