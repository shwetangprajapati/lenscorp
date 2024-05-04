import Image from 'next/image';

const ChooseLensCard = ({ title, img, desc }) => {
    return (
        <div className='w-[320px] h-[435px] bg-white rounded-2xl p-6 text-center mx-auto mb-8 hover:border hover:border-rose-400 hover:bg-transparent'>
            <h2 className='font-bold text-2xl mb-4'>{title}</h2>
            <div className="relative w-[138px] h-[138px] mx-auto mb-4  overflow-hidden animate-pulse hover:animate-none">
                <Image className='object-cover' src={img} layout="fill" alt={title} />
            </div>
            <p className='text-gray-500 font-medium leading-8'>{desc}</p>
        </div>
    );
};

export default ChooseLensCard;
