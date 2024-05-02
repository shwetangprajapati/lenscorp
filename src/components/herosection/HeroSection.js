import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <section
                className="h-screen overflow-hidden bg-cover bg-top bg-no-repeat flex justify-center md:justify-normal items-center"
                style={{
                    backgroundImage:
                        "url(https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75)",
                }}
            >
                <div className="p-8 lg:pl-80 lg:pb-8 md:text-left text-center ">
                    <h1 className="text-5xl lg:text-6xl font-semibold text-black nunito_sans">
                        We are at the <br /> forefront of AI
                    </h1>


                    <p className="hidden lg:block max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black mt-4 md:mt-6">
                        From Conserving Wildlife to Automatically<br /> Generating Caricatures- <strong>We Do It All</strong>
                    </p>
                    <div className="mt-4 sm:mt-8">
                        <Link
                            className="rounded-lg inline-block border border-black bg-black px-6 sm:px-8 py-3 text-xl font-medium text-white  hover:text-black active:text-black hover:scale-105 hover:bg-white"
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

export default HeroSection;
