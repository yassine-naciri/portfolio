import bash from "../../images/bash.png";
import css from "../../images/css.png";
import html from "../../images/html.png";
import python from "../../images/py.png";
import javas from "../../images/js.png";
import sass from "../../images/sass.png";
import git from "../../images/git.png";
import react from "../../images/react.png";
import { motion } from "framer-motion";

const skillsData = [
  { name: "JavaScript", img: javas },
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "React", img: react },
  { name: "Sass", img: sass },
  { name: "Git", img: git },
  { name: "Bash", img: bash },
];

const Skills = () => {
  return (
    <section className="bg-black py-16 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
        className="max-w-7xl mx-auto text-white font-bold"
      >
        <h1
          id="skills"
          className="text-4xl md:text-5xl mb-12 text-center tracking-wide"
        >
          Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {skillsData.map(({ name, img }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-gradient-to-r from-red-700 to-black rounded-2xl p-6 shadow-lg
              border border-white transition-colors duration-300 hover:from-red-700 hover:to-purple-700"
            >
              <img
                src={img}
                alt={name}
                className="w-20 h-20 object-contain mb-4"
                loading="lazy"
              />
              <h2 className="text-xl font-semibold">{name}</h2>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <footer className="bg-red-700 rounded-lg shadow-sm mt-16 py-6">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-black">
          <span className="text-sm font-semibold mb-4 md:mb-0">
            Developed By &#x59;&#x61;&#x73;&#x73;&#x69;&#x6E;&#x65; © 2025{" "}
            <a href="#" className="underline hover:text-white">
              All Rights Reserved.
            </a>
          </span>
          <ul className="flex flex-wrap gap-6 text-sm font-bold">
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Skills;
