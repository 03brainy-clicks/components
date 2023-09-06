import React from "react";

const CallSection = () => {
  return (
    <section className="flex h-screen w-full callsection">
      <div className="w-full h-full bg-gradient-to-r from-black via-[#000000ef] to-[#0000]">
        <div className="mx-auto w-10/12 flex h-full text-[#ECECEC] items-center">
          <div className="w-1/2 ">
            <h1 className="text-6xl font-extrabold leading-1 ">
              Still Confused? Unleash Clarity and Confidence with LiteStore!
            </h1>
            <div>
              <button className="text-[1.125rem] font-medium py-5 px-24 bg-white text-black rounded-full mt-12">
                Schedule a Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
