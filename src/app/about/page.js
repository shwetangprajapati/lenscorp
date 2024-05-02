import NumberCard from "@/components/about/NumberCard";
import { aboutdata, blogsnumber } from "@/lib/constants";
import React from "react";
import AboutHero from "./AboutHero";

const About = () => {
    return (
        <div className="pt-24 ">
            <AboutHero />
            <div className="bg-gradient-to-r from-[#0091FF] to-[#9CFEFF] my-24">
                <section className="text-white body-font max-w-7xl mx-auto">
                    <div className="container px-5 py-24 mx-auto ">
                        <div className="flex flex-wrap -mx-4 -my-8 justify-center">
                            {aboutdata.map((item) => (
                                <NumberCard
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    id={item.id}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
