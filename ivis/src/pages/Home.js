import "./../myStyle.css";
import React, { useState } from "react";

import Timer from "../components/Timer";
import GenderInfo from "../components/GenderInfo";
import UpdateGenderBtn from "../components/UpdateGenderBtn";
import FullCanvas from "../components/FullCanvas";
import Visuals from "../components/Visuals";

import { getPercentage } from "../percentage";

export default function Home(props) {
  const [src, setSrc] = useState();
  const [timer, setTimer] = useState();

  function startFlow() {
    console.log("flow btn clickd!");
    props.setFlow(true);
  }

  return (
    <>
      <Timer setTimer={setTimer} />
      <h1>Student Representation</h1>
      <h2>IT University of Copenhagen, Admission Year 2020</h2>
      <div className="genderInfo">
        {props.data.map((g) => (
          (g.admitted === 0) ? (
          <></>
          ) : (
        <div className="genderText">
            <GenderInfo
              genderText= {g.description}
              genderPercent={getPercentage(g, props.data) + "%"}
              genderColor={g.color}
            />
          </div>
        )))}
      </div>
      <UpdateGenderBtn action={startFlow} />
      <p className="timer">{timer}</p>
      <div className="p5-sketch">
        <Visuals setSrc={setSrc} data={props.data} />
      </div>
      <FullCanvas imgSrc={src} />
    </>
  );
}
