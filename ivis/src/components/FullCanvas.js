import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Sphere from "../components/Sphere";

export default function FullCanvas({imgSrc}) {
  return (
    <div>
      <Canvas className="canvas">
        <OrbitControls />
        <Stars />
        <Sphere position={[0, 0, 0]} src={imgSrc} />
      </Canvas>
    </div>
  );
}
