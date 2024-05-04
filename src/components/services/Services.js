import React from "react";
import GradientHeading from "../gradientHeading/GradientHeading";
import ServicesCard from "./ServicesCard";
import { ServiceData } from "@/lib/constants";

const Services = () => {
    return (
        <div
            className=" mt-24 bg-cover bg-top bg-no-repeat"
            style={{
                backgroundImage:
                    "url(https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75)",
            }}
        >
            <GradientHeading
                title="SERVICES"
                size="text-2xl"
            />
            <h2 className=" text-center md:text-6xl text-4xl py-12">We provide Artificial Intelligence Services</h2>
            <div className="flex justify-center  py-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
                    {ServiceData.map((item) => (
                        <ServicesCard key={item.id} index={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
