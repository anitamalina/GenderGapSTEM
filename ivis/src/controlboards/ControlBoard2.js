import React from "react";
import "./../myStyle.css";
import GenderLabels from "./GenderLabels";
import data from "../data.json";
import FlowBtn from "./FlowBtn";

export default function ControlBoard2() {

  function action() {
      return null;
  }

  return (
    <div className="controlboard">
      <h3>What gender do you want to be assigned to at ITU?</h3>
      <div className="genderLabels">
        {data.map((g) => (
          <div className="genderText" key={g.id}>
            <GenderLabels
              genderText={g.genderText}
              genderColor={g.genderColor}
            />
          </div>
        ))}
      </div>
      <div className="flowNav">
      <FlowBtn txt="Make" action={action}/>
      </div>
    </div>
  );
}
