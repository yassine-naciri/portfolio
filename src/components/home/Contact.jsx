
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { delay, motion ,AnimatePresence} from "framer-motion"
const Contact = () => {


        
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
    return (
        <section>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    type: "spring",
    stiffness: 70,
    damping: 20,
    delay: 0.5,
  }}
  className="p-8 w-full min-h-[600px] bg-black
             transition-all duration-300 text-white flex flex-col justify-center items-center font-bold text-3xl  shadow-2xl space-y-8"
>
  <div className="p-4 text-white transition-all duration-500 hover:scale-105">
    <h1 id="contact" className="text-4xl font-extrabold tracking-wide">
      Easy To Contact Me
    </h1>
  </div>

  <div className="flex flex-col lg:flex-row justify-evenly items-center w-full space-y-6 lg:space-y-0">
    <div className="lg:w-1/2 text-center lg:text-left px-6">
<motion.div className="mb-6 px-4 text-center text-gray-300 text-sm italic">
  You can leave me a message here  just add your name, email, and what’s on your mind. I’ll get back to you as soon as possible!
</motion.div>

    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full max-w-md p-8 space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-200">Leave a Message</h2>
      </div>

      <form className="space-y-4 text-sm" onSubmit={handle_submit}>
        <div>
          <label htmlFor="name" className="block font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 bg-gray-800 text-white"
            rows="4"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
          />
        </div>

        <p className="text-white font-semibold text-sm">{email_Message}</p>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-violet-500 hover:from-red-700 hover:to-red-600 transition-all duration-300 rounded-lg shadow-md hover:shadow-violet-600/50 text-white font-semibold text-sm"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </div>
</motion.div>


        </section>
    );
};

export default Contact;