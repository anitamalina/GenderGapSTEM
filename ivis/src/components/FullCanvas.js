import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sphere from "../components/Sphere";

export default function FullCanvas({imgSrc}) {
  return (
    <div>
      <Canvas className="canvas" camera={{position:[-10,2,10], fov:28}}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        {/* <pointLight color="white" intensity={1} position={[5.6, 3, -10]} /> */}
        <directionalLight color="white" intensity={1} position={[1, 3, -10]}/>
        <Stars />
        <Sphere position={[0, 0, 0]} src={imgSrc} />
      </Canvas>
    </div>
  );
}
