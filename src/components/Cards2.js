import React from "react";

const Cards2 = ({ heading, desc, image }) => {
  return (
    // <div className=" rounded-[20px] flex-1 border group overflow-hidden">
    <div className=" rounded-[20px] min-w-[557px] min-h-[509px] border group overflow-hidden">
      <div className="relative">
      <div className="w-full">
        <img
          src={image}
          alt=""
          className="animate2 object-fill w-full scale-[1.15] group-hover:scale-100 translate-y-0 group-hover:-translate-y-32 duration-500"
        />
      </div>
      <div className="p-5 border-red-500 absolute animate2 bg-black text-white  translate-y-0 group-hover:-translate-y-full  duration-500">
        <h1 className="text-2xl font-medium">{heading}</h1>
        <p className="font-normal text-lg">{desc}
        
        </p>
      </div>
      </div>
    </div>
  );
};

export default Cards2;
