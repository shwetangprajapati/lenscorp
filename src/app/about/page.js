"use client"
import { ServiceData } from "@/lib/constants";
import React from "react";
import AboutHero from "../../components/about/AboutHero";
import ServicesCard from "@/components/services/ServicesCard";
import OurTeam from "@/components/about/OurTeam";
import useLight from "@/customhooks/useLight";

const About = () => {
    const currentTheme=useLight()
    return (
        <div className="pt-24 mb-24">
            <AboutHero />
            <div className="flex justify-center  py-12" >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
                    {ServiceData.map((item) => (
                        <ServicesCard key={item.id} index={item.id} item={item} currentTheme={currentTheme}/>
                    ))}
                </div>
            </div>

            <OurTeam/>
        </div>
    );
};

export default About;
