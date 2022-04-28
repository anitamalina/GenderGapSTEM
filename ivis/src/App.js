import './style.css';
import { Canvas} from '@react-three/fiber'
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

function Sphere({ position}) {
  let [bindHover, hovered] = useHover(false)

  const vs = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }`

  const fs = `
    uniform vec3 c1;
    uniform vec3 c2;
    uniform vec3 c3;

    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(mix(c1, c2, vUv.y), 1.0);

  }`


  return (
    <>
    <ambientLight intensity={0.1}/>
    <spotLight position={[-10,10,1]} angle={0.3}/>
    <mesh position={ position} {...bindHover} onClick={e => console.log(e)}>
      <sphereBufferGeometry args={[1.5, 30, 30]} attach="geometry" />
      <shaderMaterial
        attach="material"
        wireframe="true"
        uniforms={{ c1: {value: [0.995,0.575,0.829]}, c2: {value: [0.010,0.995,0.976] }}}
        vertexShader={vs}
        fragmentShader={fs}/>
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