import "./myStyle.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import Visuals from "./Visuals";

import Sphere from "./Sphere";

function App() {
  const [src, setSrc] = useState();
      

  return (
    <>
    <Visuals setSrc={setSrc}/>s
    <Canvas className="canvas">
      <OrbitControls />
      <Stars />
      <Sphere position={[0, 0, 0]} src={src}/>
    </Canvas>
    </>
  );
}

export default App;
