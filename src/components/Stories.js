import React from "react";
import Image1 from "../assets/image-1.png";
import StoriesCard from "./StoriesCard";


const Stories = () => {
  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="w-2/3 mx-auto text-center">
        <h2 className="text-5xl font-extrabold ">
          Peak Into Our Latest Store Projects
        </h2>
        <p className="mt-3 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus
          itaque facere, id quo ut,  consequatur <br/> consectetur repudiandae officiis
          quas harum asperiores dolore, perferendis autem ratione aliquid
          voluptates totam possimus.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7 mt-16">
        <StoriesCard
          desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
          image={Image1}
        />{" "}
        <StoriesCard
          desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
          image={Image1}
        />{" "}
        <StoriesCard
          desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
          image={Image1}
        />
        <StoriesCard
          desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
          image={Image1}
        />{" "}
        <StoriesCard
          desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
          image={Image1}
        />{" "}
        <StoriesCard
          desc="
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex sint odit quaerat blanditiis voluptatem vel hic animi at eaque!"
          image={Image1}
        />
      </div>
    </div>
  );
};

export default Stories;
