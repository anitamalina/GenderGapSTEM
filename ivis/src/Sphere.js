import "./myStyle.css";
import React, { useRef} from "react";
import * as THREE from "three";


export default function Sphere({src, setSrc}) {

  const base = new THREE.TextureLoader().load(src);
  const ref = useRef();

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




