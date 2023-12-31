import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = ({ children, data, start, end ,styleClasses}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [start, end]);
const classes = styleClasses
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className={classes}>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
