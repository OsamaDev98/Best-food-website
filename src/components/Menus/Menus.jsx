import React from "react";
import { useState } from "react";
import { data } from "../../Data/data";
import { HeaderSection } from "../export";

const Menus = () => {
  const [foods, setFoods] = useState(data);
  // Filter Type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="container py-8">
      <HeaderSection head="top rated menu items" />
      <div className="flex flex-wrap justify-between items-center gap-4 w-full">
        <div className="flex flex-col gap-2">
          <h1 className="capitalize font-bold">filter type</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600"
            >
              all
            </button>
            <button
              onClick={() => filterType("burger")}
              className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600"
            >
              burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600"
            >
              pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600"
            >
              salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600"
            >
              chicken
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="capitalize font-bold">filter price</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <button onClick={() => filterPrice("$")} className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600">
              $
            </button>
            <button onClick={() => filterPrice("$$")} className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600">
              $$
            </button>
            <button onClick={() => filterPrice("$$$")} className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600">
              $$$
            </button>
            <button onClick={() => filterPrice("$$$$")} className="px-4 bg-transparent text-orange-600 border border-orange-600 duration-300 hover:text-white hover:bg-orange-600">
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {foods
          ? foods.map((item) => {
              return (
                <div
                  key={item.id}
                  className="cursor-pointer shadow-lg rounded-xl overflow-hidden duration-300 hover:scale-[1.04] md:hover:scale-[1.08]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="bg-white p-2 flex justify-between items-center">
                    <h1 className="font-bold">{item.name}</h1>
                    <button className="text-white bg-orange-600 px-4">
                      {item.price}
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Menus;
