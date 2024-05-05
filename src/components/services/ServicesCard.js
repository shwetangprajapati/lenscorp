"use client"
import React, { useState, memo } from "react";

const ServicesCard = ({ index, item }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div key={index}>
                <article
                    className={`overflow-hidden rounded-lg transition`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`dark:bg-customlight bg-white lg:w-[470px] lg:h-[360px] h-auto p-4 sm:p-6 hover:bg-transparent ${isHovered ? `rounded-lg border border-rose-400` : ""}`}
                    >
                        <div className="relative block text-6xl text-gray-400 pb-8 font-semibold">
                            0
                            <span className={isHovered ? "text-rose-400" : ""}>{index}</span>
                            <span
                                className={`sm:text-4xl text-2xl absolute top-[15px] left-[50px] text-nowrap ${isHovered ? "left-[90px] transition-all ease-in-out duration-300" : "transition-all ease-in-out duration-300"
                                    }`}
                            >
                                <span
                                    className={isHovered ? `text-inherit text-wrap  font-medium` : `text-rose-400 text-wrap font-medium`}
                                >
                                    {item.title}
                                </span>
                            </span>
                        </div>
                        <p className="mt-2 text-lg font-medium leading-8 text-gray-500">
                            {item.desc}
                        </p>
                    </div>
                </article>
            </div>
        </>
    )
}
export default memo(ServicesCard)

