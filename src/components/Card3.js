import React from "react";

const Card3 = ({ heading, desc, image }) => {
  return (
    <section className="h-screen w-screen relative text-center text-white overflow-hidden">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="absolute top-0 bg-[#00000048] w-full pt-12 h-screen">
        <h1 className="text-7xl font-extrabold">{heading}</h1>
        <p className="text-[1.75rem] pt-10 font-medium">{desc}</p>
      </div>
    </section>
  );
};

export default Card3;
