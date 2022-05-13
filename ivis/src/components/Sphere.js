import "./../myStyle.css";
import React, { useRef } from "react";
import * as THREE from "three";


export default function Sphere({src, setSrc}) {

  const base = new THREE.TextureLoader().load(src);
  const ref = useRef();
  /*   useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01)) */

  return (
    <>
      <mesh visible castShadow ref={ref}>
        <sphereGeometry attach="geometry" args={[2, 32, 32]} />
        <meshStandardMaterial map={base} color="white" roughness={0.4} metalness={0.2} />
      </mesh>
    </>
  );
}