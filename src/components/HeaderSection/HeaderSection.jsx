import React from "react";

const HeaderSection = ({ head }) => {
  return (
    <h1 className="text-orange-600 capitalize font-bold text-3xl text-center">
      {head}
    </h1>
  );
};

export default HeaderSection;
