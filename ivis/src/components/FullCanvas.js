import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, PerspectiveCamera } from "@react-three/drei";
import Sphere from "../components/Sphere";

export default function FullCanvas({ imgSrc }) {
  return (
    <div>
      <Canvas className="canvas" camera={{ position: [10, 2, 10], fov: 28 }}>
        <OrbitControls />
        <Stars />
        <PerspectiveCamera makeDefault fov={28} position={[-10, 2, 10]}>
          <spotLight position={[10, 10, 10]} angle={10} />
          <ambientLight intensity={0.1} />
        </PerspectiveCamera>
        <Sphere position={[0, 0, 0]} src={imgSrc} />
      </Canvas>
    </div>
  );
}
