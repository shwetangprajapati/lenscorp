import React, { memo } from 'react'

const GradientHeading = ({ title, size }) => {
    return (
        <div className="flex flex-col items-center py-8">
            <h3 className={`text-center text-black nunito_sans font-semibold ${size}`}>{title}</h3>
            <div className='bg-gradient-to-r from-[#0091FF] to-[#9CFEFF] rounded-lg w-[145px] h-[8px] mt-2'></div>
        </div>
    )
}

export default memo(GradientHeading)