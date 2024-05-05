import { clientsData } from "@/lib/constants";
import Image from "next/image";

const OurClients = () => {

    return (
        <div className="py-16">
            <h2 className="text-center  text-4xl font-semibold pb-24 nunito_sans">
                We Work With Amazing Clients
            </h2>
            <marquee scrollamount="20">
                <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
                    {clientsData.map((client, index) => (
                        <div key={index} className="w-28 sm:w-32 md:w-40">
                            <Image
                                src={client.src}
                                width={192}
                                height={128}
                                alt="our clients"
                                className={`text-transparent`}
                            />
                        </div>
                    ))}
                </div>
            </marquee>
        </div>
    );
};

export default OurClients;
