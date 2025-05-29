import AboutPic from "../../images/about.avif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-black to-red-700 py-16 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 text-white"
      >
        <div className="flex-1">
          <h1
            id="about"
            className="text-4xl md:text-5xl font-bold mb-6 tracking-wide"
          >
            About Me
          </h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Hi, I’m <span className="text-red-600 font-extrabold">&#x59;&#x61;&#x73;&#x73;&#x69;&#x6E;&#x65;!</span> I’m a web developer who loves to make beautiful things.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkmq5irMOoDxOOFEzmA8ixJFpVn9Pyn7LHg&s" 
            alt="Loading..."
            className="w-full max-w-sm rounded-3xl border-4 border-red-600 object-contain shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
