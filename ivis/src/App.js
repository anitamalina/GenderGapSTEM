import './style.css';
import { Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import React, { useRef } from "react";
import earthImg from './world.jpg'
import * as THREE from "three";




function Sphere({ position}) {
  const base=new THREE.TextureLoader().load(earthImg)
  const ref=useRef()
/*   useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01)) */


  return (
    <>
      <mesh visible castShadow ref={ref}>
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
         map={base}
         color="white"
      />
      </mesh>
    </>
  )
}


function App() {
  return (
    <Canvas className="canvas">
      <OrbitControls />
      <Stars />
      <Sphere position={[0,0,0]}/>
    </Canvas>
  );
}

export default App;