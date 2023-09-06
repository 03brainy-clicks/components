import React from "react";

const Cards = ({ desc, image }) => {
  return (
    <div className=" relative overflow-hidden h-[691px] w-full group">
      <div className="">
        <img
          src={image}
          alt=""
          className="h-[691px] group-hover:scale-110 scale-100 animate object-cover "
        />
      </div>
      <div className="flex items-center h-full bg-[#0000009c] absolute top-0 -translate-y-full group-hover:translate-y-0 animate opacity-0 group-hover:opacity-100">
        <p className="text-white text-lg w-8/12 mx-auto ">{desc}</p>
      </div>
      <br />
    </div>
  );
};

export default Cards;
