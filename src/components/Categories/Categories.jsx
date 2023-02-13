import React from "react";
import { HeaderSection } from "../export";
import { categories } from "../../Data/data";
import { useState } from "react";

const Categories = () => {
  const [category, setCategory] = useState(categories);
  return (
    <div className="container py-6">
      <HeaderSection head="top rated categories" />
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 py-8">
        {category
          ? category.map((item) => {
              return (
                <div
                  key={item.id}
                  className="cursor-pointer bg-gray-200 flex justify-between items-center flex-wrap p-2 rounded-xl duration-300 hover:scale-[1.04] md:hover:scale-[1.08]"
                >
                  <h1 className="font-bold">{item.name}</h1>
                  <img src={item.image} alt={item.name} className="w-[20%]" />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Categories;
