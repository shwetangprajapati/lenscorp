"use client"
import React, { useState, useTransition } from 'react';
import { faqsData } from "@/lib/constants";
import GradientHeading from '../gradientHeading/GradientHeading';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Faq = () => {
    const [selectedFaq, setSelectedFaq] = useState(0);
    const [isPending, startTransition] = useTransition();
    const toggleItem = (id) => {
        startTransition(() => {
            setSelectedFaq(id);
        });
    };
    return (
        <div className="my-24 flex justify-center items-center">
            <div>
                <GradientHeading
                    title="GET TO KNOW US"
                    size="text-2xl"
                />
                <h2 className='text-center lg:text-6xl md:text-4xl text-3xl py-16'>Frequently Asked Questions</h2>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {faqsData.map((item) => (
                            <div key={item.id}>
                                <div className="flex items-center justify-between cursor-pointer rounded-lg  p-4  border border-black" onClick={() => toggleItem(item.id)}>
                                    <h2>{item.question}</h2>
                                    <ChevronDownIcon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                {selectedFaq === item.id && <p className="mt-2 leading-relaxed text-gray-500">{item.answer}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Faq;






