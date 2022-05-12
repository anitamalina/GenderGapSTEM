import React, { useState } from "react";
import GenderLabels from "./GenderLabels";
import FlowBtn from "./FlowBtn";
import Question from "./Question";

import "./../../myStyle.css";

// import data from "./../data.json"
// data is an array from the database which consist of an object with genderText, genderColor and id

export default function AssignControlBoard({
  questionTxt,
  flowBtnTxt,
  flowBtnAction,
  data,
  assignedGender,
  setAssignedGender,
  isActive,
  setIsActive
}) {

  /* useEffect(() => (console.log("useeffect")), [setAssignedGender, console.log("from arr assignedgender", assignedGender) && console.log("from arr checkedgender", checked)]) */
  
  const [checked, setChecked] = useState("")

  function setStates(g) {
    console.log("setstates callsed")
    setAssignedGender(g.genderText)
    setChecked(g.genderText)
    setIsActive(true)
  }


  // if checked (if the user have selcted a gender)
 if (assignedGender !== "") return (
  <div className="controlboard">
    <Question questionTxt={questionTxt} />
    <div className="genderLabels">
      {/* look if one which is checked */}
      {data.map((g) => (
        (g.genderPercent === 0) ? (<></>) :
         // if one is checked
         ((checked === g.genderText) ? (
          <div className="genderLabel-selected">
          <div className="genderText" key={g.id}>
          <GenderLabels
            genderText={g.genderText}
            genderColor={g.genderColor}
            selectGender={() => setStates(g)}
          />
        </div>
        </div>
        // if one is not checked
        ) : (
          <div className="genderText" key={g.id}>
          <GenderLabels
            genderText={g.genderText}
            genderColor={g.genderColor}
            selectGender={() => setStates(g)}
          />
        </div>  
        ))
       
      ))}
    </div>
      <FlowBtn isActive={isActive} flowBtnTxt={flowBtnTxt} flowBtnAction={flowBtnAction}/>
  </div>
  )

 // default - the user havn't checked any gender yet
 else return (
  <div className="controlboard">
    <Question questionTxt={questionTxt} />
    <div className="genderLabels">
      {data.map((g) => (
        (g.genderPercent === 0) ? (<></>) : 
        <div className="genderText" key={g.id}>
          <GenderLabels
            genderText={g.genderText}
            genderColor={g.genderColor}
            selectGender={() => setStates(g)}
          />
        </div>
      ))}
    </div>
      <FlowBtn flowBtnTxt={flowBtnTxt} flowBtnAction={flowBtnAction} />
  </div>
  )

  }
