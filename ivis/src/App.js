import './style.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"></boxBufferGeometry>
      <meshLambertMaterial attach="material" color="hotpink"></meshLambertMaterial>
    </mesh>
  )
}

function App() {
  return (
    <Canvas className="canvas">
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5}/>
      <spotLight position={[10,15,10]} angle={0.3}/>
      <Box/>
    </Canvas>
  );
}

export default App;
