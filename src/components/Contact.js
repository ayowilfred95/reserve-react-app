import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import {Link } from 'react-router-dom';


const Contact = () =>{
    return (
        <div>
            <h1 className='text-orange-600 font-bold text-4xl py-10 text-center'>Follow us on our social media page</h1>
 <div className="text-5xl flex justify-center gap-16 py-10 text-gray-600 dark:text-gray-400">
              <Link href="https://www.twitter.com/ayomidewilfred9" target="_blank" >
              <AiFillTwitterCircle /> 
                </Link>
              <Link href="https://www.linkedin.com/in/ayomide-wilfred-95083a104/" target="_blank"  >
                <AiFillLinkedin />
                 </Link>
              <Link href="https://www.github.com/ayowilfred95" target="_blank"> 
              <AiFillGithub />
              </Link>
        </div>

        </div>
            
    );   
} 

export default Contact;
