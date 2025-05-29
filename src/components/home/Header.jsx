import { delay, motion ,AnimatePresence} from "framer-motion"
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { FiGithub,FiLinkedin,FiTwitter,FiMenu ,FiX } from "react-icons/fi";

const Header = () => {


    
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [email_Message,setEmail_Message] = useState('')



    


    const handle_submit = (e) =>{
        e.preventDefault()


    let api_key = import.meta.env.VITE_APP_KEY
    let service_id = import.meta.env.VITE_APP_SERVICE
    let template_id = import.meta.env.VITE_APP_UID
    let mail = import.meta.env.VITE_APP_MAIL

    const templateInfo = {
        from_name: name,
        from_email:mail,
        client_email : email,
        infos: import.meta.env.VITE_APP_REF,
        message: message
    }


    if(email , name , message != "")
    {
        setEmail_Message("Sending...")
    emailjs.send(service_id,template_id,templateInfo,api_key)
    .then((response) => {


        setEmail_Message("Message Sent Successfully")
        //alert("Email sent successfully")
        setEmail("")
        setName("")
        setMessage("")
        setTimeout(() => { setEmail_Message("") }, 3000);
        //setInterval(function() {setEmail_Message("")}, 3000);
        //setSubject("")
        //setPhone("")
        console.log(response)
        
    })
    .catch((error) => {
        console.log(error)
        setEmail_Message("Try Again Later")
        //setTimeout(() => { setEmail_Message("") },500);
        setTimeout(() => { setEmail_Message("") },3000);
        //setInterval(function() {setEmail_Message("")}, 1000);
        //alert("400")
    })
    }
    else{
        setEmail_Message("Enter Your info")
        setTimeout(() => { setEmail_Message("") },3000);
    }




    }



    
    const [contactOpen , setContactOpen] = useState(false);
    const openContact  = () => setContactOpen(true)
    const closeContact = () => setContactOpen(false)
    
    const [IsOpen , setIsOpen] = useState(false);
    const toggleMenu  = () => setIsOpen(!IsOpen)
    return ( 
        
        <header className="absolute w-full z-50 transition-all duration-300">
{/*        <div className="flex justify-center   ">
            <button className='fixed bg-red-600 font-bold '>back to top</button>

        </div>*/}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
    
        {/*<div className="bg-transparent w-full flex justify-center items-center gap-5 fixed ">*/}


        <motion.div 
        initial={{opacity: 0,x: -50}}
        animate={{opacity: 1,x: 0}}
        transition={{type: "spring",
        stiffness:100,
        damping: 25,
        delay:0.3,
        duration: 1.2,
        }}
        className="flex items-center">
       
        <div className=" h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-red-600 font-bold text-xl mr-3">
             <img className="object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkmq5irMOoDxOOFEzmA8ixJFpVn9Pyn7LHg&s"/>
        </div>
        <span className=" text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
           <a href="#">Developer</a>
        </span>
        </motion.div>
        <nav className="lg:flex hidden space-x-8">
        <a 
                initial={{opacity:0 ,y: -20}}
                animate={{opacity: 1,y:0 }}
                transition={{type : "spring",
                stiffness:100,
                damping:20,
                delay: 0.7}}
               
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-red-500 font-semibold transition-colors duration-300 group"
                 href="#home">Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
            {["Skills","About","Contact"].map((item,index) => (
                <motion.a key={item}
                initial={{opacity:0 ,y: -20}}
                animate={{opacity: 1,y:0 }}
                transition={{type : "spring",
                stiffness:100,
                damping:20,
                delay: 0.7 + index * 0.2}}
               
                className="relative text-gray-800 dark:text-gray-200 hover:violet-600 dark:hover:text-red-500 font-semibold transition-colors duration-300 group"
                href={`#${item.toLowerCase()}`}>{item}
                

                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                 </motion.a>
            ))}

        </nav>

        <div className="md:flex hidden items-center space-x-4">
            <motion.a 
            initial={{opacity :0 , scale:0.5}}
            animate={{opacity:1 ,scale:1}}
            transition={{delay:1.3 ,duration:0.8}}
            href="https://github.com/yassine-naciri" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
            <FiGithub className="w-5 h-5"></FiGithub>

            </motion.a>


            <motion.a 
            initial={{opacity :0 , scale:0.5}}
            animate={{opacity:1 ,scale:1}}
            transition={{delay:1.3 ,duration:0.8}}
            href="https://x.com/dscsdcdv7" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
            <FiTwitter className="w-5 h-5"></FiTwitter>

            </motion.a>

            <motion.a 
            initial={{opacity :0 , scale:0.5}}
            animate={{opacity:1 ,scale:1}}
            transition={{delay:1.3 ,duration:0.8}}
            href="#" className="text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
            <FiLinkedin className="w-5 h-5"></FiLinkedin>

            </motion.a>

            <motion.button
            onClick={openContact}
            initial={{opacity:0, scale:0.8}}
            animate={{ opacity:1 ,scale:1}}
            transition={{delay:1.6 ,duration:0.8,
            type:"spring",
            stiffness:100,
            damping:15,}}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-red-700 font-bold hover:from-red-700 hover:to-purple-700 hover:text-white transition-all duration-500 "
            >Contact Me

            </motion.button>
        </div>

        <div className="md:hidden flex items-center ">
        <motion.button 
        whileTap={{scale:0.7}}
        className="text-gray-300"
        onClick={toggleMenu}
        >{ IsOpen ? <FiX className="h-6 w-6"/> : <FiMenu className="h-6 w-6"/>}</motion.button>
        </div>
        </div>
        {/* */}
        <motion.div 
        initial={{opacity:0 , height:0}}
        animate={{
            opacity : IsOpen ? 1 : 0,
            height: IsOpen ? "auto" : 0,
        }}
        transition={{duration: 0.5}}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg
        px-4 py-5 space-y-5">
        <nav className="flex flex-col space-y-3">

            {/*<a onClick={toggleMenu} className="text-gray-300 font-medium py-2" href="#" >Home</a>*/}
            <a onClick={toggleMenu} className="text-gray-300 font-medium py-2" href="#skills" >Skills</a>
            <a onClick={toggleMenu} className="text-gray-300 font-medium py-2" href="#about" >About</a>
            <a onClick={toggleMenu} className="text-gray-300 font-medium py-2" href="#contacts" >Contact</a>
          
        

        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-5">
            <a href="https://github.com/yassine-naciri" target="_blank" >
                <FiGithub className="h-5 w-5 text-gray-300"/>
            </a>
            <a href="https://x.com/dscsdcdv7" target="_blank" >
                <FiTwitter className="h-5 w-5 text-gray-300"/>
            </a>
            <a href="#">
                <FiLinkedin className="h-5 w-5 text-gray-300"/>
            </a>
            </div>


            <button 
            onClick={() => {
                toggleMenu()
                openContact()
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg 
            bg-gradient-to-r from-red-600 to-violet-400 font-bold">Contact Me</button>
        </div>

        </motion.div>  
        {/*</div> fixed nav*/}
        {/* Contact*/}

        <AnimatePresence>


        
        {contactOpen && (
            <motion.div 
            initial={{opacity : 0 }}
            animate={{opacity : 1}}
            exit={{opacity: 0}}
            transition={{duration : 0.5}}
            className="fixed inset-0 bg-black/50 background-blue-sm z-50
            flex items-center justify-center p-4 "
            //onClick={closeContact}
            >
            <motion.div
            initial={{scale : 0.8 , opacity : 0 , y:30}}
            animate = {{scale : 1 , opacity : 1, y:0}}
            exit = {{scale : 0.8 ,opacity : 0 , y:30 }}
            transition={{type : "spring",
            damping:30,
            stiffness : 200,
            duration: 0.8}}
             className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
             >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-300">Get In Touch</h1>
                    <button onClick={closeContact}>
                    <FiX  className="w-5 h-5  text-gray-300 font-extrabold hover:text-red-600 border rounded-2xl  hover:border-amber-100 transition duration-300 cursor-pointer"/>
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handle_submit}>
                    <div className="">
                    <lable htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                    </lable>
                    <input className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2
                      focus:ring-violet-500 bg-gray-700"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name"/>
                    

                    </div>
                    <div className="">
                    <lable htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                    </lable>
                    <input className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2
                      focus:ring-violet-500 bg-gray-700"
                    type="email"
                    id="email"
                    placeholder="Enter Your Eamil"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    </div>



                    <div className="">
                    <lable htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message
                    </lable>
                    <textarea className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2
                      focus:ring-violet-500 bg-gray-700"
                    rows="4"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter Your Message"/>

                    </div>
                <p className="text-white font-bold">{email_Message}</p>
                <motion.button 
                type="submit" 
                whileHover={{scale : 1.03}}
                whileTap={{scale : 0.97}}                
                className="w-full px-4 py-2 bg-gradient-to-r from-red-600
                 to-violet-400 hover:from-red-700 hover:to-red-700 
                 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-600/50">
                    Send Message
                 </motion.button>

                </form>

            </motion.div>

            </motion.div>
        )}

        </AnimatePresence>


        </header>
    );
};

export default Header;