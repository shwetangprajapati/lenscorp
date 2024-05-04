import { ButtonArrow } from "@/lib/SVGs";
import Link from "next/link";
import React from "react";
import GradientHeading from "../gradientHeading/GradientHeading";

const AboutHome = () => {
    return (
        <div className="bg-white md:w-[80%] mx-auto px-4 py-12 md:py-16 ">

            <GradientHeading
                title="ABOUT US"
                size="text-6xl"
            />
            <div className="p-8 flex items-center justify-between flex-col-reverse gap-0 lg:gap-10	lg:flex-row bg-blue-100 rounded-xl hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out delay-150 mt-8">
                <div className="p-4 w-full text-center lg:text-start">
                    <h2 className="text-4xl lg:text-5xl font-medium text-black">
                        Welcome To LENS
                    </h2>
                    <p className="text-gray-500 mt-4 md:mt-8 text-sm md:text-base leading-6">
                        We put our hearts, souls, and sweat into designing and developing
                        custom AI-powered solutions for your business so you don&apos;t have to.
                    </p>
                    <div className="mt-6 md:mt-10">

                        <Link
                            class="group relative inline-flex items-center overflow-hidden rounded-lg bg-transparent border border-black px-6 py-3 text-black hover:bg-black hover:text-white focus:outline-none "
                            href="/about"
                        >
                            <span class="absolute -end-full transition-all group-hover:end-4">
                                <ButtonArrow />
                            </span>

                            <span class=" font-medium transition-all group-hover:me-4">
                                Learn More
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="p-4 w-full  flex justify-center">
                    <img
                        alt="about us"
                        src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"
                        className="w-full md:h-[395px] h-[232px]  object-cover rounded-lg p-2 hover:p-0 bg-white duration-300 transition ease-in-out delay-150 hover:-translate-y-1"
                    />
                </div>
            </div>

        </div>
    );
};

export default AboutHome;
