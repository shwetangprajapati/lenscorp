import Image from "next/image"

const AboutHero = () => {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-medium tracking-tight text-black nunito_sans sm:text-6xl">
                            Welcome To LENS
                        </h1>
                        <p className="mt-4 text-xl text-black">
                            We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don&apos;t have to.
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                            >
                                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                    <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                <Image
                                                    width={384}
                                                    height={512}
                                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1712048058%2Flenscorp-website%2FIMG-20231225-WA0164_fdxdhj.jpg&w=384&q=75"
                                                    alt="team members"
                                                    className=" object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    width={384}
                                                    height={512}
                                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1712048048%2Flenscorp-website%2Fimage_123650291_k27zul.jpg&w=384&q=75"
                                                    alt="team members"
                                                    className=" object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    width={384}
                                                    height={512}
                                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1712048064%2Flenscorp-website%2FWhatsApp_Image_2024-03-07_at_5.11.50_PM_yoghpa.jpg&w=384&q=75"
                                                    alt="team members"
                                                    className=" object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    width={384}
                                                    height={512}
                                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1701322079%2Flenscorp-website%2F6C41840C-B268-4871-B5FB-007AB2BB5CA1_rmbh8x.jpg&w=384&q=75"
                                                    alt="team members"
                                                    className=" object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    width={384}
                                                    height={512}
                                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1701160589%2Flenscorp-website%2FIMG_20231127_164120_kozywb.jpg&w=384&q=75"
                                                    alt="team members"
                                                    className=" object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    width={384}
                                                    height={512}
                                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1701160589%2Flenscorp-website%2FIMG_20230616_181312_jghxzi.jpg&w=384&q=75"
                                                    alt="team members"
                                                    className=" object-cover object-center"
                                                />
                                            </div>
                                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                <Image
                                                    width={384}
                                                    height={512}
                                                    src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1694167814%2Flenscorp-website%2FIMG_6003_xwi9xs.jpg&w=384&q=75"
                                                    alt="team members"
                                                    className=" object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutHero