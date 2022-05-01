import "./myStyle.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useState } from "react";
import Visuals from "./Visuals";

import Sphere from "./Sphere";
import UpdateGenderBtn from "./UpdateGenderBtn";

function App() {
  const [src, setSrc] = useState();

  function goToPage() {
    return null;
  }
      
  return (
    <>
    <UpdateGenderBtn action={goToPage}/>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc}/>
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
