
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section  id="home" className="h-screen bg-gradient-to-b from-black to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      
      <div className="z-40 xl:mb-0 mb-[20%] max-w-md w-full">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 3.5rem)" }}
          className="font-bold z-10 mb-6 break-words whitespace-normal text-white"
        >
          Hi there!<br />
          I’m a Web Developer who loves building beautiful and functional websites.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          Welcome to my portfolio!
        </motion.p>
      </div>

      <Spline scene="https://prod.spline.design/Jtlh00XKYsM9MDqY/scene.splinecode" />
    </section>
  );
};

export default HeroSection;
