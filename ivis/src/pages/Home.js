import "./../myStyle.css";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Parse from "parse";

import data from "./../data.json";

import Timer from "../components/Timer";
import GenderInfo from "../components/GenderInfo";
import UpdateGenderBtn from "../components/UpdateGenderBtn";
import Visuals from "../components/Visuals";
import Sphere from "../components/Sphere";

export default function Home(props) {
  const [src, setSrc] = useState();
  const [timer, setTimer] = useState();
  const [parsedData, setData] = useState();

  useEffect(()=>{
    getGenders().then((data)=>setData(data));
  },[]);

  function startFlow() {
    console.log("flow btn clickd!");
    props.setFlow(true);
  }

  async function getGenders() {
    let genderArray = [];
    let query = new Parse.Query("gender_itu");

    try {
      let genders = await query.find();

      genders.forEach((gender) => {
        genderArray.push(gender);
      });
      return genderArray;
    } catch (error) {}
  }

  if(!parsedData){
    return <div><p>Loading</p></div>
  } else return (
    <>
      <Timer setTimer={setTimer} />
      <h1>Student Representation</h1>
      <div className="genderInfo">
        {parsedData.map((g) => (
          <div className="genderText">
            <GenderInfo
              genderText={g.get("gender_description")}
              genderPercent={g.get("admitted") + " %"}
              genderColor={g.get("color")}
            />
          </div>
        ))}
      </div>
      <UpdateGenderBtn action={startFlow} />
      <p className="timer">{timer}</p>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc} data={parsedData}/>
      </div>
      <Canvas className="canvas">
        <OrbitControls />
        <Stars />
        <Sphere position={[0, 0, 0]} src={src} />
      </Canvas>
    </>
  );
}
