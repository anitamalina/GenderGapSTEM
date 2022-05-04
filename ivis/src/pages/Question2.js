import "./../myStyle.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import data from "./../data.json"

import Visuals from "../components/Visuals";
import Sphere from "../components/Sphere";
import ControlBoard from "../components/update-gender-components/ControlBoard"

export default function Question2(props) {
  const [src, setSrc] = useState();

  function goToQuestion3() {
    console.log("next btn clickd!! ");
    props.setQuestion3(true)
    props.setQuestion2(false)
  }

  return (
    <>
      <ControlBoard questionTxt={"What gender do you want to be identified as at ITU?"} flowBtnTxt={"Make"} flowBtnAction={goToQuestion3} data={data}/>
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
