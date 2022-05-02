import "./myStyle.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, { useState } from "react";

// components
import Visuals from "./Visuals";
import Sphere from "./Sphere";
import ControlBoard from "../update-gender-components/ControlBoard";
import ThankYou from "../update-gender-components/ThankYou";
import data from "./data.json"


function App() {
  const [src, setSrc] = useState();

  function goToPage() {
    return null;
  }
      
  return (
    <>
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