import "./myStyle.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useState } from "react";

// components
import Visuals from "./Visuals";
import Sphere from "./Sphere";
import ControlBoard from "../components/update-gender-components/ControlBoard";
import ThankYou from "../components/update-gender-components/ThankYou";
import data from "./data.json"


function App() {
  const [src, setSrc] = useState();

  function goToPage() {
    return null;
  }
      
  return (
    <>
   
    </>
  );
}

export default App;