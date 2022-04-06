import './style.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import React, { useState, useCallback } from 'react'

function useHover(stopPropagation = true) {
  const [hovered, setHover] = useState(false)
  
  const hover = useCallback(e => {
    if (stopPropagation) e.stopPropagation()
    setHover(true)
  }, [])
  
  const unhover = useCallback(e => {
    if (stopPropagation) e.stopPropagation()
    setHover(false)
  }, [])

  const [bind] = useState(() => ({ onPointerOver: hover, onPointerOut: unhover }))
  
  return [bind, hovered]
}

function Sphere({ position }) {
  let [bindHover, hovered] = useHover(false)

  return (
    <>
    <ambientLight intensity={0.5}/>
    <spotLight position={[-10,10,1]} angle={0.3}/>
    <mesh position={ position} {...bindHover} onClick={e => console.log(e)}>
      <sphereBufferGeometry args={[0.5, 30, 30]} attach="geometry" />
      <meshLambertMaterial attach="material" color={hovered ? 'black' : 'hotpink'}></meshLambertMaterial>
    </mesh>
    </>
  )
}


function App() {
  return (
    <Canvas className="canvas">
      <OrbitControls />
      <Stars />
      <Sphere position={[2,0,0]} />
      <Sphere position={[0,0,0]} />
      <Sphere position={[-2,0,0]} />
    </Canvas>
  );
}

export default App;