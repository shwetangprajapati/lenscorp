

const NumberCard = ({ title, description, id }) => {
    return (
        <div className="py-8 px-4 lg:w-1/2 lg:px-2">
            <div className="h-full flex items-start transition duration-300 transform hover:scale-105">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-black pb-2 mb-2 border-b-2 border-gray-200">
                        0
                    </span>
                    <span className="font-medium text-lg text-black title-font leading-none">
                        {id}
                    </span>
                </div>
                <div className="flex-grow pl-6">
                    <h1 className="title-font text-2xl font-medium text-[#ff5d5b] mb-3 nunito_sans">
                        {title}
                    </h1>
                    <p className="leading-relaxed mb-5">{description}</p>
                </div>
            </div>
        </div>
    );
};



export default NumberCard;
