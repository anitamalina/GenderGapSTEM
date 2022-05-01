import "./myStyle.css";
import React, { useRef, useEffect, useState } from "react";
import Visuals from "./Visuals";
import * as THREE from "three";
import map from "./map.jpg";
import Sketch from "react-p5";


export default function Sphere({src, setSrc}) {

  const base = new THREE.TextureLoader().load(src);
  const ref = useRef();
  /*   useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01)) */

  return (
    <>
      <mesh visible castShadow ref={ref}>
        <directionalLight intensity={0.5} />
        <sphereGeometry attach="geometry" args={[2, 32, 32]} />
        <meshBasicMaterial map={base} color="white" />
      </mesh>
    </>
  );
}




