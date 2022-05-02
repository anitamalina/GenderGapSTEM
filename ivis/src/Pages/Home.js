import React, {useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

// components
import Sphere from "../components/Sphere";
import Timer from "../components/Timer"
import GenderInfo from "../components/GenderInfo"
import UpdateGenderBtn from "../components/UpdateGenderBtn"
import Visuals from "../components/Visuals"

import data from "./../data.json"


export default function Home(props) {

    const [timer, setTimer] = useState();

    const navigate = useNavigate();

    function goToPage() {
      navigate("/update-gender")
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
    <UpdateGenderBtn updateGenderAction={goToPage}/>
    <p className="timer">{timer}</p>
      <div className="p5-sketch">
        <Visuals setSrc={props.setSrc}/>
      </div>
    <Canvas className="canvas" >
      <OrbitControls />
      <Stars />
      <Sphere position={[0, 0, 0]} src={props.src}/>
    </Canvas>
        </>
    )
}