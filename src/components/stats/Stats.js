import { blocksData } from "@/lib/constants";
import React from "react";

const Stats = () => {

    return (
        <div className={` px-16 py-24  bg-darkblue dark:bg-customlight`} >
            <div>
                <h2 className="text-center sm:text-4xl text-3xl text-white pb-16 text-nowrap">By the numbers</h2>
                <div className="flex  justify-center sm:gap-24 gap-4">
                    {blocksData.map((block, index) => (
                        <React.Fragment key={index}>
                            <div className="text-center ">
                                <div className="text-white font-semibold sm:text-5xl text-2xl pb-2">{block.number}<span className=" text-darksky text-4xl">+</span></div>
                                <div className="text-white sm:text-lg text-base text-nowrap" dangerouslySetInnerHTML={{ __html: block.text }}
                                />
                            </div>
                            {index !== blocksData.length - 1 && <div className="sm:h-[100px] sm:block hidden  border border-white border-l-white"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Stats;

