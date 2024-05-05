import Image from 'next/image';
import React, { memo } from 'react'

const ChooseLensCard = ({ title, img, desc, currentTheme }) => {
    return (
        <div className={`w-[320px] h-[435px]  ${currentTheme === "dark" ? "bg-[#1b1c1e]" : "bg-white"}  rounded-2xl p-6 text-center mx-auto mb-8 hover:border hover:border-rose-400 hover:bg-transparent`}>
            <h2 className='font-bold text-2xl mb-4'>{title}</h2>
            <div className="relative w-[138px] h-[138px] mx-auto mb-4  overflow-hidden animate-pulse hover:animate-none">
                <Image
                    className='object-cover'
                    src={img}
                    fill={true}
                    alt={title}
                    sizes="auto"
                 />
            </div>
            <p className='text-gray-500 font-medium leading-8'>{desc}</p>
        </div>
    );
};

export default memo(ChooseLensCard);
