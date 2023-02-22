import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";



const Contact = () =>{
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12' >
            <h1 className='text-orange-600 font-bold text-4xl py-10 text-center'>Follow us on our social media page</h1>
 <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400 ">
              <a href="https://www.twitter.com/ayomidewilfred9" rel="noopener noreferrer" target="_blank" >
              <AiFillTwitterCircle /> 
                </a>
              <a href="https://www.linkedin.com/in/ayomide-wilfred-95083a104/" rel="noopener noreferrer" target="_blank"  >
                <AiFillLinkedin />
                 </a>
              <a href="https://www.github.com/ayowilfred95" rel="noopener noreferrer" target="_blank"> 
              <AiFillGithub />
              </a>
        </div>

        </div>
            
    );   
} 

export default Contact;
