import './myStyle.css';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";

function Box(){
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  )
}

function App() {
  return (
    <Canvas className='canvas'>
      <OrbitControls/>
      <Stars/>
      <ambientLight intensity={0.5}/>
      <spotLight angle={0.3} position={[10,15,10]}/>
      <Box/>
    </Canvas>
  );
}

export default App;
