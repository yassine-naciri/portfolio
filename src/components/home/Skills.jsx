
import bash from "../../images/bash.png"
import css from "../../images/css.png"


import html from "../../images/html.png"
import python from "../../images/py.png"
import javas from "../../images/js.png"
import sass from "../../images/sass.png"
import git from "../../images/git.png"
import react from "../../images/react.png"
import { delay, motion ,AnimatePresence} from "framer-motion"
const Skills = () => {
    return (
        <section className="">
        <motion.div
        initial={{opacity:0 ,y: 20}}
        animate={{opacity: 7,y:-5 }}
        transition={{type : "spring",
        stiffness:50,
        damping:20,
        delay: 3 }}
        className="p-10 w-full h-100 bg-black text-white flex flex-col justify-around items-center font-bold text-3xl ">
        
        <div className="p-8">   
            <h1 id="skills">Skills</h1>
        </div>
        
        <div className="flex flex-col gap-5 lg:flex-row p-5 justify-center items-center transition-all duration-500 ">
        <div className=" border border-xl border-3 border-white h-[10rem] w-[130%] lg:h-[13rem] lg:w-[10.5rem]  rounded-2xl p-10 object-cover flex flex-col bg-gradient-to-r from-red-700 to-black text-white font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 hover:scale-y-1"><h2 className="font-medium">JavaScript</h2> <img className="w-15 h-15 object-cover " src={javas} alt="Loading..." /></div>
        
        <div className="border border-xl border-3 border-white h-[10rem] w-[130%] lg:h-[13rem] lg:w-[10.5rem] rounded-2xl p-10 object-cover flex flex-col bg-gradient-to-r from-red-700 to-black text-white font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 hover:scale-y-1  "><h2 className="font-medium">Html</h2><img className="w-15 h-15 object-cover " src={html} alt="Loading..." /></div>
        
        <div className="border border-xl border-3 border-white h-[10rem] w-[130%] lg:h-[13rem] lg:w-[10.5rem] rounded-2xl p-10 object-cover flex flex-col bg-gradient-to-r from-red-700 to-black text-white text-red-700 font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 hover:scale-y-1 "><h2 className="font-medium">Css</h2><img className="w-15 h-15 object-cover " src={css} alt="Loading..." /></div>
        
        <div className="border border-xl border-3  border-white h-[10rem] w-[130%] lg:h-[13rem] lg:w-[10.5rem] rounded-2xl p-10 object-cover flex flex-col bg-gradient-to-r from-red-700 to-black text-white font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 hover:scale-y-1 "><h2 className="font-medium">React</h2><img className="w-15 h-15 object-cover " src={react} alt="Loading..." /></div>
        
        <div className="border border-xl border-3 border-white h-[10rem] w-[130%] lg:h-[13rem] lg:w-[10.5rem] rounded-2xl p-10 object-cover flex flex-col bg-gradient-to-r from-red-700 to-black text-white font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 hover:scale-y-1 "><h2 className="font-medium">Sass</h2><img className="w-15 h-15 object-cover " src={sass} alt="Loading..." /></div>
        
        <div className="border border-xl border-3 border-white h-[10rem] w-[130%] lg:h-[13rem] lg:w-[10.5rem] rounded-2xl p-10 object-cover flex flex-col bg-gradient-to-r from-red-700 to-black text-white font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 hover:scale-y-1 "><h2 className="font-medium">Git</h2><img className="w-15 h-15 object-cover " src={git} alt="Loading..." /></div>
        
        <div className="border border-xl border-3 border-white h-[10rem] w-[130%] lg:h-[13rem] lg:w-[10.5rem] rounded-2xl p-10 object-cover flex flex-col bg-gradient-to-r from-red-700 to-black text-white font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 hover:scale-y-1 "><h2 className="font-medium">Bash</h2><img className="w-15 h-15 object-cover " src={bash} alt="Loading..." /></div>    
        </div>

<footer class="bg-red rounded-lg shadow-sm m-4 dark:bg-red-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-black-500 sm:text-center dark:text-white-400">Developed By Ysn © 2025 <a href="#" class="hover:underline"> All Rights Reserved.</a> 
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-bold text-black sm:mt-0">
        <li>
            <a href="#skills" class="hover:underline me-4 md:me-6 pl-2"> Skills</a>
        </li>
        <li>
            <a href="#about" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#home" class="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
       
        
        
       
        
        </motion.div>

        </section>
    );
};

export default Skills;