import "./../myStyle.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useState } from "react";


// components
import Visuals from "../components/Visuals";
import Sphere from "../components/Sphere";

export default function UpdateGenderFlow() {
  const [src, setSrc] = useState();
      
  return (
    <>
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