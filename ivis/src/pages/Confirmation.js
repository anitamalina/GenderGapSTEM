import "./../myStyle.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import Visuals from "../components/Visuals";
import Sphere from "../components/Sphere";
import Notification from "../components/update-gender-components/Notification";

export default function Confirmation(props) {
  const [src, setSrc] = useState();

  function goToHome() {
    console.log("OK btn clickd!! ");
    props.setQuestionConfirm(false)
  }

  return (
    <>
    <Notification confirmAction={goToHome} />
      <div className="p5-sketch">
        <Visuals setSrc={setSrc} />
      </div>
      <Canvas className="canvas">
        <OrbitControls />
        <Stars />
        <Sphere position={[0, 0, 0]} src={src} />
      </Canvas>
    </>
  );
}
