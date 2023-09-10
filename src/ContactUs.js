import React from "react";
import GetInTouchCard from "./components/contactus/GetInTouchCard";

// getintouch image
import Email from "./assets/email.png";
import WhatsApp from "./assets/whatsapp.png";
import Pin from "./assets/pin.png";
import ImageCrousel from "./components/contactus/ImagesCrousel";
import ContactUsImage from "./assets/contactus.png";
import Button from "./components/contactus/Button";

const ContactUs = () => {
  const images = [
    ContactUsImage,
    "https://images.pexels.com/photos/4998194/pexels-photo-4998194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9066320/pexels-photo-9066320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const getInTouch = [
    {
      id: 1,
      image: Email,
      title: "Send us an email",
      subTitle: "support@litestore.in",
      desc: "Drop us a message, and let's shape retail excellence together.",
    },
    {
      id: 2,
      image: WhatsApp,
      title: "Give us a call",
      subTitle: "+91 9483465923",
      desc: "Ring us to explore limitless retail possibilities.",
    },
    {
      id: 3,
      image: Pin,
      title: "Address",
      subTitle: "Indira Nagar, Bangalore",
      desc: "Discover our location where innovation meets retail vibrancy.",
    },
  ];

  return (
    <div className="flex flex-col gap-20 mt-20 bg-white  ">
      {/* get in touch  */}
      <div className="w-10/12 mx-auto relative">
        <div className=" getInTouch relative min-h-[70vh] p-5  flex text-center items-center justify-center text-white">
          <div className="mb-36">
            <h2 className="text-6xl font-extrabold ">Get in touch</h2>
            <p className="text-lg w-2/3 mx-auto font-medium inter mt-5">
              At Litestore, we empower brands to thrive in dynamic retail
              environments by offering short-term leasing opportunities within
              our innovative flexi retail spaces.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-16 relative z-10 -top-40">
          {getInTouch.map((item) => {
            return (
              <GetInTouchCard
                key={item.id}
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>

      {/* contact form  */}
      <div className="flex w-full">
        <div className="flex-1 bg-black h-[805px] overflow-hidden">
          <ImageCrousel slides={images} />
        </div>
        <div className="flex-1 bg-black p-20 flex items-center">
          <div className="w-full text-white">
            <div>
              <h3 className="text-[40px] font-extrabold">Contact Us</h3>
              <p className="text-lg font-medium mt-1">
                We would love to hear from you!
              </p>
            </div>
            <form className="mt-11 text-white flex flex-col gap-11 contact">
              <div className="flex gap-20">
                <div className="flex flex-col gap-3 flex-1">
                  <label htmlFor="name" className="font-semibold ">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="py-2 bg-transparent outline-none border-b  placeholder:text-[#7E7E7E] font-medium focus:border-white border-[#7E7E7E]"
                  />
                </div>{" "}
                <div className="flex flex-col gap-3 flex-1">
                  <label htmlFor="name" className="font-semibold ">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="py-2 bg-transparent outline-none focus:border-white border-[#7E7E7E] border-b  placeholder:text-[#7E7E7E] font-medium "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3  ">
                <label htmlFor="name" className="font-semibold ">
                  Purpose
                </label>
                <div className="py-2  gap-11 columns-2">
                  <div className="flex  items-center">
                    <input
                      type="radio"
                      name="purpose"
                      id=""
                      className="mr-[10px] w-4 h-4 accent-[#ECECEC] bg-none "
                    />{" "}
                    <span>Want to partner with LiteStore?</span>
                  </div>{" "}
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="purpose"
                      id=""
                      className="mr-[10px] w-4 h-4 accent-[#ECECEC] bg-none"
                    />{" "}
                    <span>Other</span>
                  </div>
                  <div className="flex  items-center">
                    <input
                      type="radio"
                      name="purpose"
                      id=""
                      className="mr-[10px] w-4 h-4 accent-[#ECECEC] bg-none"
                    />{" "}
                    <span>Want to book space with LiteStore?</span>
                  </div>{" "}
                </div>
              </div>
              <div className="flex flex-col gap-3  ">
                <label htmlFor="name" className="font-semibold ">
                  Purpose
                </label>
                <textarea
                  name="purpose"
                  id="purpose"
                  placeholder="Write us a message..."
                  className="py-2 resize-y  bg-transparent outline-none border-b placeholder:text-[#7E7E7E] font-medium focus:border-white border-[#7E7E7E]"
                ></textarea>
              </div>
              <div>
                <Button title={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
