import GradientHeading from "../gradientHeading/GradientHeading";
import { ChecklistIcon } from "@/lib/SVGs";
import { chooseLensData, features } from "@/lib/constants";
import ChooseLensCard from "./ChooseLensCard";

const ChooseLens = () => {
  return (
    <>
      <GradientHeading title="WHY CHOOSE LENS" size="text-2xl" />
      <h2 className="text-center md:text-6xl text-4xl py-12">
        AI-driven solutions backed by science
      </h2>
      <div
        className="py-8 bg-cover bg-top bg-no-repeat
                dark:bg-none
                bg-[url(https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75)]
                "
      >
        <p className="my-4 text-xl font-medium leading-8 text-gray-500 text-center w-2/3 mx-auto">
          Every piece of AI technology shipped from LENS is thoroughly
          benchmarked via rigorous evaluations. With a global network of experts
          and academicians, we guarantee the most accurate and robust solutions
          in the market.
        </p>
        <div className="flex justify-center items-center h-full">
          <div className="block sm:grid grid-cols-2 gap-4 text-lg py-8 ">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div>
                  <ChecklistIcon />
                </div>
                <div>{feature}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="block sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-16 px-0 sm:px-16">
          {chooseLensData.map((lens) => (
            <ChooseLensCard
              key={lens.id}
              title={lens.title}
              img={lens.img}
              desc={lens.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChooseLens;
