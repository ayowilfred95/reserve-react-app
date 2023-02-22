import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom';
import Form from "./components/Form";

function App() {
  return (
    
    <div className="App"> 
     <Routes>
       <Route exact path="/" element={<Navbar />} />
      <Route path="/form" element={<Form />} />
    </Routes>  
    </div>
   

   
  );
}

export default App;
