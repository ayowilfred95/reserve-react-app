import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form() {
const [foodItems, setFoodItems] = useState("Pizza");
const [quantity, setQuantity] = useState(1);
const [totalAmount, setTotalAmount] = useState(0);
const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const orderDetails = {
      foodItems,
      quantity,
      totalAmount,
    };
    alert(`order ${foodItems},${quantity} number of ${foodItems}, $${totalAmount} created successfully`);
     navigate("/");
     console.log(orderDetails);
    }catch(error) {
      console.log(error);
      alert("order not received,kindly order again");
      navigate("/");
    }
   
  
}

  return (
   <div className="w-full py-[100px] px-[600px] max-w-xs md:flex md:items-center mb-6">
     
      <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="block text-orange-600 text-center py-4 text-4xl font-bold mb-2">Order Form</h1>
        <div className="mb-4 py-4 ">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="food items">
          Food Items:
          <select value={foodItems} onChange={(e) => setFoodItems(e.target.value)}>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Fries">Fries</option>
            <option value="Salad">Salad</option>
          </select>
        </label>
         </div>
    
        <div className="mb-6">
           <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="quantity">
          Quantity:
          <input type="number" className='bg-transparent p-2 focus:outline-none ' value={quantity} min="1" max="10" onChange={(e) => setQuantity(e.target.value)} />
        </label>

        </div>
       
       <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="amount">
          Total Amount:
          <input className='bg-transparent p-2 focus:outline-none ' type="number" value={totalAmount} step="1" onChange={(e) => setTotalAmount(e.target.value)} />
        </label>
        <div className="flex items-center justify-between">
         <button className="bg-pink-500 hover:bg-pink-700 text-white  font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"  type="submit">Submit Order</button>
        </div>
      </form>

    </div>
  )
}

export default Form;
