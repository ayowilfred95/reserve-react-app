import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Contact =()=>{
  
    const [name, setName] = useState();
const [email, setEmail] = useState();
const [message, setMessage] = useState();
const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const contact = {
      name,
      email,
      message,
    };
    alert("Message sent successfully");
     navigate("/");
     console.log(contact);
    }catch(error) {
      console.log(error);
      alert("Message sent failed, kindly resend");
      navigate("/");
    }
   
  
}


  

    return (
        <div >
             <h1 className='text-orange-600 font-bold text-4xl py-10 text-center'>Contact us</h1>
     <div className='max-w-full m-[20px] px-2'>
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
        <label htmlFor="name">Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border border-red-500 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="name" type="text" placeholder="Name" required />
    </div>
    <div className="mb-6">
    <label htmlFor="email">Email:</label>
     <input value={email} onChange={(e) => setEmail(e.target.value)}  className="shadow appearance-none border border-red-500 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Email address" required />
    </div>
    <div className="mb-6">
         <label htmlFor="message">Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}  className="shadow appearance-none text-sm border border-red-500 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="message" rows="4" placeholder="Message" required />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-pink-500 hover:bg-pink-700 text-white  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"  type="submit">
        Send
      </button>
    </div>
     <p className="text-center py-4 text-gray-500 text-xs">
    &copy;2023 Wilfred Blog. All rights reserved.
  </p>
  </form>
</div>
</div> 
     
    );
}
export default Contact;
