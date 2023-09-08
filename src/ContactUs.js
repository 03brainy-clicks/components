import React from "react";
import GetInTouchCard from "./components/contactus/GetInTouchCard";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-24 mt-24">
      {/* get in touch  */}
      <div>
        <div className="w-10/12 getInTouch min-h-[70vh] p-5 mx-auto flex text-center items-center justify-center text-white">
          <div>
            <h2 className="text-6xl font-extrabold ">Get in touch</h2>
            <p className="text-lg w-2/3 mx-auto font-medium inter mt-5">
              At Litestore, we empower brands to thrive in dynamic retail
              environments by offering short-term leasing opportunities within
              our innovative flexi retail spaces.
            </p>
          </div>
          <GetInTouchCard />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
