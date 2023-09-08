import React from "react";

const StoreCard = ({ heading, tags, address, image }) => {
  return (
    <div className="flex rounded-3xl min-w-[300px] max-h-[423px] group relative overflow-hidden">
      <div className="w-full  ">
        <img
          src={image}
          alt=""
          className="w-full h-full group-hover:scale-[1.15] animate object-cover"
        />
        <div
          id="animation-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="relative h-full overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item=""
            >
              <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item=""
            >
              <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 3 */}
            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 4 */}
            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item=""
            >
              <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 5 */}
            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item=""
            >
              <img
                src={image}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 p-5 z-10 space-y-2   text-white bg-[#0202026c] backdrop-blur-sm w-full ">
        <h1 className="text-2xl font-medium">{heading}</h1>
        <div className="flex gap-3">
          {tags.map((tag) => {
            return (
              <>
                <div className="p-1 px-5 text-xs font-medium     bg-white text-[#020202] rounded-full">
                  {tag}
                </div>
              </>
            );
          })}
        </div>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default StoreCard;
