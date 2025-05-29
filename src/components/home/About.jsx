import AboutPic from "../../images/about.avif"

import { delay, motion ,AnimatePresence} from "framer-motion"
const Contacts = () => {
    return (
        <section>
        <motion.div
        initial={{opacity:0 ,y: 20}}
        animate={{opacity: 7,y:-5 }}
        transition={{type : "spring",
        stiffness:50,
        damping:20,
        delay: 3 }}
        className="p-6 w-full h-150 bg-gradient-to-r from-black to-red-700 
                 transition-all duration-300 text-black flex flex-col justify-around items-center font-bold text-3xl ">
      

 
        <div className="p-4 text-white transition-all duration-500 hover:scale-y-1" >   
            <h1 id="skills">About Me</h1>
        </div>

        

        <div className="flex justify-evenly items-center w-full h-full">
        
        <div className="w-150 flex ">
        <h1 className="font-bol lg:w-150 text-white"> Hi, I’m <span className="text-red-600">Yassine!</span> I’m a web developer who loves to make beautiful things.</h1>
        
        </div>


        <div className="transition-all duration-500 hover:scale-y-1 ">
        <img className=" p-4 w-100 h-100 object-contain   lg:border  lg:rounded-4xl " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkmq5irMOoDxOOFEzmA8ixJFpVn9Pyn7LHg&s" alt="Loading..." />
        </div>
        
        </div>    
   
              
        
        
       
        
        </motion.div>

        </section>
    );
};

export default Contacts;