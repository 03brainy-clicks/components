import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full object-cover">
      <AnimatePresence wait>
        <motion.div
          key={currentSlide}
          className="top-0 left-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="text-4xl font-bold">
            <img
              src={slides[currentSlide]}
              alt=""
              className="object-cover w-full h-full"
            />
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
