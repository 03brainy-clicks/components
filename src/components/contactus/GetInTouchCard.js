import React from "react";

const GetInTouchCard = ({ image, title, desc, subTitle }) => {
  return (
    <div className="w-[345px] text-center min-h-[345px]  shadow-md rounded-3xl p-8 flex flex-col gap-[26px] inter bg-white">
      <div className="">
        <img src={image} alt="" width={90} height={90} className="mx-auto" />
      </div>
      <div>
        <h4 className="font-semibold text-xl">{title}</h4>
        <p className="font-medium text-[#7E7E7E] mt-2">{desc}</p>
      </div>
      <hr className="bg-#D9D8D8" />
      <div>
        <h5 className="font-semibold">{subTitle}</h5>
      </div>
    </div>  
  );
};

export default GetInTouchCard;
