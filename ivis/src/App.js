import "./myStyle.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useState } from "react";

// components
import Visuals from "./Visuals";
import Timer from "./Timer";
import GenderInfo from "./GenderInfo";
import Sphere from "./Sphere";
import UpdateGenderBtn from "./UpdateGenderBtn";
import ControlBoard from "./re-registration-flow/ControlBoard";
import data from "./data.json"
import ThankYou from "./re-registration-flow/ThankYou";

function App() {
  const [src, setSrc] = useState();
  const [timer, setTimer] = useState();

  function goToPage() {
    return null;
  }
      
  return (
    <>
{/*     <ControlBoard/> */}
    <ThankYou/>
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
  );
}

export default App;
