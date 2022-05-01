import React, { useRef} from "react";
import * as THREE from "three";


export default function Sphere(props) {
    let base = new THREE.TextureLoader().load(props.img)
    /* let base = getSketch() */
  
    const ref = useRef()
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