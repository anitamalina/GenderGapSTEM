import React, {useState} from "react";
import FlowBtn from "./FlowBtn";
import Question from "./Question"

import "./../../myStyle.css"
import GenderLabels from "./GenderLabels";

// import data from "./../data.json"
// data is an array from the database which consist of an object with genderText, genderColor and id


export default function ControlBoard({questionTxt, flowBtnAction, flowBtnTxt, assignedGender, setAssignedGender}) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="controlboard">
      <Question questionTxt={questionTxt}/>
      <GenderLabels setAssignedGender={setAssignedGender} assignedGender={assignedGender} isActive={isActive} setIsActive={setIsActive}/>
      <div className="flowNav">
      <FlowBtn flowBtnTxt={flowBtnTxt} flowBtnAction={flowBtnAction} isActive={isActive}/>
      </div>
    </div>
  );
}
