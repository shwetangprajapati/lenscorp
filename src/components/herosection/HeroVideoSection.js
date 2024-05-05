import Link from "next/link";
import React from "react";

const HeroVideoSection = () => {
    return (
        <>
            <section className="relative h-screen flex flex-col items-center justify-center text-center py-0 px-3">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                        className="min-w-full min-h-full absolute object-cover"
                        autoPlay="autoplay"
                        muted
                        loop
                    >
                        <source
                            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="video-content space-y-8">
                    <h1 className="text-5xl lg:text-6xl font-semibold nunito_sans">
                        We are at the forefront of AI
                    </h1>
                    <div >
                        <Link
                            className="rounded-lg inline-block border border-white bg-white px-6 sm:px-8 py-3 text-xl font-medium text-black  hover:text-white active:text-white hover:scale-105 hover:bg-black"
                            href="/about"
                        >
                            Learn more
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroVideoSection;
