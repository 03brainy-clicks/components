import React from "react";

const Button = ({ title }) => {
  return (
    <button className="hover:bg-[#ECECEC] hover:text-black  duration-500 transition-all relative py-4 px-24 bg-transparent font-medium text-xl border overflow-hidden rounded-full border-[#ECECEC]">
      {title}
    </button>
  );
};

export default Button;
