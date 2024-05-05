import Image from "next/image";

const AboutHero = () => {
    return (
        <>
            <div className="relative isolate -z-10">
                <svg
                    className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-[#9CFEFF] [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-[#9CFEFF]">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                    />
                </svg>
                <div
                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-r from-[#0091FF] to-[#9CFEFF] opacity-30"
                        style={{
                            clipPath:
                                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
                        }}
                    />
                </div>
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="w-full max-w-xl lg:shrink-0 ">
                                <h1 className="text-4xl font-medium tracking-tight  nunito_sans sm:text-6xl">
                                    Welcome To LENS
                                </h1>
                                <p className="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none">
                                    We put our hearts, souls and sweat into designing and
                                    developing custom AI - powered solutions for your business so
                                    you don&apos;t have to.
                                </p>
                            </div>
                            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">

                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <Image
                                            width={384}
                                            height={512}
                                            src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1701322079%2Flenscorp-website%2F6C41840C-B268-4871-B5FB-007AB2BB5CA1_rmbh8x.jpg&w=384&q=75"
                                            alt="team members"
                                            className="aspect-[2/3]  rounded-xl bg-black/5 object-cover shadow-lg"
                                        />

                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <Image
                                            width={384}
                                            height={512}
                                            src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1712048064%2Flenscorp-website%2FWhatsApp_Image_2024-03-07_at_5.11.50_PM_yoghpa.jpg&w=384&q=75"
                                            alt="team members"
                                            className="aspect-[2/3]  rounded-xl bg-black/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            width={384}
                                            height={512}
                                            src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1712048048%2Flenscorp-website%2Fimage_123650291_k27zul.jpg&w=384&q=75"
                                            className="aspect-[2/3]  rounded-xl bg-black/5 object-cover shadow-lg"
                                            alt="team member"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <Image
                                            width={384}
                                            height={512}
                                            src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1701160589%2Flenscorp-website%2FIMG_20230616_181312_jghxzi.jpg&w=384&q=75"
                                            alt="team members"
                                            className="aspect-[2/3]  rounded-xl bg-black/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
                                    </div>
                                    <div className="relative">
                                        <Image
                                            width={384}
                                            height={512}
                                            src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1694167814%2Flenscorp-website%2FIMG_6003_xwi9xs.jpg&w=384&q=75"
                                            alt="team members"
                                            className="aspect-[2/3]  rounded-xl bg-black/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutHero;
