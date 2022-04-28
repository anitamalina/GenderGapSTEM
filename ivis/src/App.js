import './style.css';
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import React, { useState, useCallback } from 'react'


function Sphere({ position}) {
  return (
    <>
    <ambientLight intensity={0.1}/>
    <spotLight position={[-10,10,1]} angle={0.3}/>
    <mesh position={ position} onClick={e => console.log(e)}>
      <sphereBufferGeometry args={[1.5, 30, 30]} attach="geometry" />
      {/* <meshLambertMaterial attach="material" color={hovered ? 'black' : 'hotpink'}></meshLambertMaterial> */}
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