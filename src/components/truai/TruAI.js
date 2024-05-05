"use client"
import useLight from "@/customhooks/useLight";
import { ButtonArrow } from "@/lib/SVGs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TruAI = () => {
    const currentTheme = useLight();

    return (
        <>
            <div className={`flex items-center justify-between  text-white ${currentTheme === "dark" ?"bg-[#1b1c1e]":"bg-[#272e5c]"} py-24`}>
                <div className="hidden lg:block">
                    <Image
                        src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75"
                        alt="Tru-Ai"
                        width={333}
                        height={329}
                    />
                </div>
                <div className="text-center">
                    <div className="py-4 lg:text-6xl text-4xl text-white font-semibold">
                        Meet <span className="truai">True-AI</span>
                    </div>
                    <div className="py-4  text-2xl">Design. Create. Deploy.</div>
                    <div className="flex items-center justify-center">
                        <div className="py-3 border-b-2 border-white  w-[2.5rem]"> </div>
                        <div className="truai text-xl">the Future of AI | Power to EDIT</div>
                    </div>
                    <div className="py-4 text-sm">
                        Based On Your Website & Traffic Trends, Tru-AI Optimises Your
                        Website
                    </div>

                    <Link
                        className="group relative px-6 py-3 my-4 inline-flex items-center overflow-hidden rounded-lg bg-transparent border border-white text-white hover:bg-white hover:text-black focus:outline-none "
                        href="/about"
                    >
                        <span className="absolute -end-full transition-all group-hover:end-4">
                            <ButtonArrow />
                        </span>

                        <span className=" font-medium transition-all group-hover:me-4">
                            Learn More
                        </span>
                    </Link >
                </div >
                <div className="hidden md:block">
                    <video
                        width="454"
                        height="255"
                        className="rounded-l-full"
                        autoPlay="autoplay"
                        muted
                        loop
                    >
                        <source
                            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div >
        </>
    );
};

export default TruAI;
