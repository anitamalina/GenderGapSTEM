import "./../myStyle.css";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import data from "../data.json"

import Visuals from "../components/Visuals";
import Sphere from "../components/Sphere";
import AssignControlBoard from "../components/update-gender-components/AssignControlBoard"
import IdentityControlBoard from "../components/update-gender-components/IdentityControlBoard";
import Notification from "../components/update-gender-components/Notification";

export default function Flow(props) {
  const [src, setSrc] = useState()
  const [isActive, setIsActive] = useState(false)

  const [question2, setQuestion2] = useState(false);
  const [questionConfirm, setQuestionConfirm] = useState(false);

  function goToQuestion2() {
    console.log("next btn clicked!! ")

    if (isActive) return (
        setQuestion2(true)
    )    
  }

  function goToQuestionConfirm() {
    console.log("next btn clickd!! ");
    setQuestion2(false)
    setQuestionConfirm(true)
  }

  function goToHome() {
    console.log("OK btn clickd!! ");
    setQuestionConfirm(false)
    props.setFlow(false)
  }

    // confirmation
    if (questionConfirm) return (
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
    ) 

    // question 2
    if (question2) return (
      <>
      <IdentityControlBoard questionTxt={"What gender do you want to be identified as at ITU?"} flowBtnTxt={"Make"} flowBtnAction={goToQuestionConfirm} data={data} identifiedGender={props.identifiedGender} setIdentifiedGender={props.setIdentifiedGender}/>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc} />
      </div>
      <Canvas className="canvas">
        <OrbitControls />
        <Stars />
        <Sphere position={[0, 0, 0]} src={src} />
      </Canvas>
      </>
    )

    // question 1
    else return (
      <>
      <AssignControlBoard isActive={isActive} setIsActive={setIsActive} questionTxt={"What gender are you assigned to at ITU?"} flowBtnTxt={"Next"} flowBtnAction={goToQuestion2} data={data} assignedGender={props.assignedGender} setAssignedGender={props.setAssignedGender}/>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc} />
      </div>
      <Canvas className="canvas">
        <OrbitControls />
        <Stars />
        <Sphere position={[0, 0, 0]} src={src} />
      </Canvas>
    </>
    )

}
