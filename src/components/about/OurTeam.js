import GradientHeading from "../gradientHeading/GradientHeading";
import Image from "next/image";

const OurTeam = () => {
    const cardsArray = Array.from({ length: 30 }, (v, i) => i);

    return (
        <>
            <div className="mx-auto  max-w-7xl px-6  lg:px-8">
                <div className="mx-auto  lg:mx-0">
                    <GradientHeading
                        title="Meet Our Researchers"
                        size="sm:text-6xl text-2xl"
                    />
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2  lg:max-w-none lg:grid-cols-4"
                >
                    {cardsArray.map((person) => (
                        <li key={person.name} className="hover:scale-110 transition duration-300 transform hover:-translate-y-1 ">
                            <Image
                                className="mx-auto object-cover rounded-r-2xl"
                                src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
                                alt={person.name}
                                width={320}
                                height={426}
                            />
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight ">
                                Michael Foster
                            </h3>
                            <p className="text-sm leading-6 ">Co-Founder / CTO</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default OurTeam;
