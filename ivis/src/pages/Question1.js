import "./../myStyle.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import data from "./../data.json"

import Visuals from "../components/Visuals";
import Sphere from "../components/Sphere";
import ControlBoard from "./../components/update-gender-components/ControlBoard"

export default function Question1(props) {
  const [src, setSrc] = useState()

  function goToQuestion2() {
    console.log("next btn clickd!! ")
    props.setQuestion2(true)
    props.setQuestion1(false)
  }

  return (
    <>
      <ControlBoard questionTxt={"What gender are you assigned to at ITU?"} flowBtnTxt={"Next"} flowBtnAction={goToQuestion2} data={data} assignedGender={props.assignedGender} setAssignedGender={props.setAssignedGender}/>
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
