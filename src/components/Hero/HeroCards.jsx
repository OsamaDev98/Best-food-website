import React from "react";
import { heroData } from "../../Data/data";

const HeroCards = () => {
  return (
    <div className="container py-4 grid gap-6 md:grid-cols-3">
      {heroData
        ? heroData.map((data) => {
            return (
              // Card
              <div key={data.id} className="relative rounded-xl group overflow-hidden">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 p-2 rounded-xl z-[2]">
                  <h1 className="capitalize text-white text-xl font-bold">
                    {data.h1}
                  </h1>
                  <p className="capitalize text-white">{data.p}</p>
                  <button className="cursor-pointer absolute bottom-2 bg-white text-black duration-300 hover:bg-orange-600 hover:text-white">
                    {data.btn}
                  </button>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.h1}
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl duration-300 group-hover:scale-[1.08]"
                  />
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default HeroCards;
