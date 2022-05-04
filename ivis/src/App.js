import "./myStyle.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import { OrbitControls, Stars } from "@react-three/drei";
import Visuals from "./components/Visuals";

import Home from "./Pages/Home"
import UpdateGenderFlow from "./Pages/UpdateGenderFlow"
import Flow from "./Pages/Flow";


export default function App() {

  const [src, setSrc] = useState();
      
  return (
    <>
      
      <Router> 
        <Routes>
          <Route path="/" element={<Home src={src} setSrc={setSrc}/>} />
          <Route path="/flow" element={<Flow scr={src} setSrc={setSrc}/>} />
          <Route path="/update-gender" element={<UpdateGenderFlow scr={src} setSrc={setSrc}/>} /> 
          <Route path="*" element={<Home src={src} setSrc={setSrc}/>}/> 
         </Routes> 
      </Router>
    </>
  );
}
