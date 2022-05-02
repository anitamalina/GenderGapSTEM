import React from "react";
import GenderLabels from "./GenderLabels";
import FlowBtn from "./FlowBtn";
import Question from "./Question"

import "./../myStyle.css";

// import data from "./../data.json"
// data is an array from the database which consist of an object with genderText, genderColor and id


export default function ControlBoard({questionTxt, flowBtnAction, data}) {
  return (
    <div className="controlboard">
      <Question questionTxt={questionTxt}/>
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
      <FlowBtn txt="Next" flowBtnAction={flowBtnAction}/>
      </div>
    </div>
  );
}
