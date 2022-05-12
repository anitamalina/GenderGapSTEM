import React, { useState } from "react";
import GenderLabels from "./GenderLabels";
import FlowBtn from "./FlowBtn";
import Question from "./Question";

import "./../../myStyle.css";

// import data from "./../data.json"
// data is an array from the database which consist of an object with genderText, genderColor and id

export default function IdentityControlBoard({
  questionTxt,
  flowBtnTxt,
  flowBtnAction,
  data,
  identifiedGender,
  setIdentifiedGender
}) {

  /* useEffect(() => (console.log("useeffect")), [setIdentifiedGender, console.log("from arr identifiedGender", identifiedGender) && console.log("from arr checkedgender", checked)]) */
  
  const [checked, setChecked] = useState("")
  const [isActive, setIsActive] = useState(false)

  function setStates(g) {
    console.log("setstates callsed");
    setIdentifiedGender(g.description);
    setChecked(g.description);
    setIsActive(true);
  }


  // if checked (if the user have selcted a gender)
 if (identifiedGender !== "") return (
  <div className="controlboard">
    <Question questionTxt={questionTxt} />
    <div className="genderLabels">
      {/* look if one which is checked */}
      {data.map((g) => (
        // if one is checked
        (checked === g.description) ? (
          <div className="genderLabel-selected">
          <div className="genderText" key={g.id}>
          <GenderLabels
            genderText={g.description}
            genderColor={g.color}
            selectGender={() => setStates(g)}
          />
        </div>
        </div>
        // if one is not checked
        ) : (
          <div className="genderText" key={g.id}>
          <GenderLabels
            genderText={g.description}
            genderColor={g.color}
            selectGender={() => setStates(g)}
          />
        </div>  
        )
      ))}
    </div>
      <FlowBtn isActive={isActive} flowBtnTxt={flowBtnTxt} flowBtnAction={flowBtnAction} />
  </div>
  )

 // default - the user havn't checked any gender yet
 else return (
  <div className="controlboard">
    <Question questionTxt={questionTxt} />
    <div className="genderLabels">
      {data.map((g) => (
        <div className="genderText" key={g.id}>
          <GenderLabels
            genderText={g.description}
            genderColor={g.color}
            selectGender={() => setStates(g)}
          />
        </div>
      ))}
    </div>
      <FlowBtn flowBtnTxt={flowBtnTxt} flowBtnAction={flowBtnAction} />
  </div>
  )

  }
