import "./myStyle.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useState } from "react";
import Visuals from "./Visuals";
import Timer from "./Timer";
import GenderInfo from "./GenderInfo";

import Sphere from "./Sphere";
import UpdateGenderBtn from "./UpdateGenderBtn";
import ControlBoard1 from "./controlboards/ControlBoard1";

function App() {
  const [src, setSrc] = useState();
  const [timer, setTimer] = useState();

  let genderInfo = [ {genderText: "female", genderPercent: 40.2, genderColor: "#77F2FC"}, {genderText: "male", genderPercent: 59.8, genderColor: "#C897F9"}]

  function goToPage() {
    return null;
  }
      
  return (
    <>
    <ControlBoard1/>
    <Timer setTimer={setTimer}/>
    <h1>Student Representation</h1>
    <div className="genderInfo">
      {genderInfo.map((g) => (
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
