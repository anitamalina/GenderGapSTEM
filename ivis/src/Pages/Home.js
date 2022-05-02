import React, {useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

// components
import Sphere from "../components/Sphere";
import Timer from "../components/Timer"
import GenderInfo from "../components/GenderInfo"
import UpdateGenderBtn from "../components/UpdateGenderBtn"
import Visuals from "../components/Visuals"

import data from "./../data.json"


export default function Home() {

    const [src, setSrc] = useState();
    const [timer, setTimer] = useState();



  function goToPage() {
    return null;
  }

    return (
        <>
            <Timer setTimer={setTimer}/>
    <h1>Student Representation</h1>
    <div className="genderInfo">
      {data.map((g) => (
        <div className="genderText">
        <GenderInfo genderText={g.genderText} genderPercent={g.genderPercent + ' %'} genderColor={g.genderColor} />
        </div>
      ))}
    </div>
    <UpdateGenderBtn action={goToPage}/>
    <p className="timer">{timer}</p>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc}/>
      </div>
    <Canvas className="canvas" >
      <OrbitControls />
      <Stars />
      <Sphere position={[0, 0, 0]} src={src}/>
    </Canvas>
        </>
    )
}