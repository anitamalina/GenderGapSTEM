import "./myStyle.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useState } from "react";
import Visuals from "./Visuals";
import Timer from "./Timer";

import Sphere from "./Sphere";
import UpdateGenderBtn from "./UpdateGenderBtn";

function App() {
  const [src, setSrc] = useState();
  const [timer, setTimer] = useState();

  function goToPage() {
    return null;
  }
      
  return (
    <>
    <h1>Student Representation</h1>
    <UpdateGenderBtn action={goToPage}/>
    <p>{timer}</p>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc}/>
        <Timer setTimer={setTimer}/>
      </div>
    <Canvas className="canvas" >
      <OrbitControls />
      <Stars />
      <Sphere position={[0, 0, 0]} src={src}/>
    </Canvas>
    </>
  );
}

export default App;
