import './style.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import React, { useState} from "react";
/* import earthImg from './world_color.jpg' */
/* import mySketch from './untitled.myCanvas' */

import Sketch from './Sketch';
import Sphere from './Sphere';




/* async function getSketch(props) {
  const loader = new THREE.TextureLoader()
  let sketch = loader.load(<Sketch setup={props.setup} draw={props.draw} />)
  console.log("sketch console", sketch)
  return sketch
} */

function App() {

  const [img, setImg] = useState()
  

  return (
    <>
    <Sketch setImg={setImg} />
    <Canvas className="canvas">
      <OrbitControls />
      <Stars />
      <Sphere img={img}/>
    </Canvas>
    </>
  );
}

export default App;