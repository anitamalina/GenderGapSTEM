import "./../myStyle.css";
import React, { useState } from "react";

import Timer from "../components/Timer";
import GenderInfo from "../components/GenderInfo";
import UpdateGenderBtn from "../components/UpdateGenderBtn";
import FullCanvas from "../components/FullCanvas";
import Visuals from "../components/Visuals";

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
      <div className="genderInfo">
        {props.data.map((g) => (
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
        <Visuals setSrc={setSrc} data={props.data} />
      </div>
      <FullCanvas imgSrc={src} />
    </>
  );
}
