import React, {useEffect, useState, renderer} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Sphere from "../components/Sphere";
import Timer from "../components/Timer"
import GenderInfo from "../components/GenderInfo"
import UpdateGenderBtn from "../components/UpdateGenderBtn"
import Visuals from "../components/Visuals"

import data from "../data.json"


export default function Flow({setSrc, src}) {

    const [timer, setTimer] = useState();

    const navigate = useNavigate();

    function goToPage() {
      navigate("/hej")
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
    <UpdateGenderBtn updateGenderAction={goToPage}/>
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