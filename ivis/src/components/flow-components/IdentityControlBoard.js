import React, { useState } from "react";
import "./../../myStyle.css";

// Import components
import GenderLabels from "./GenderLabels";
import FlowBtn from "./FlowBtn";
import Question from "./Question";

export default function IdentityControlBoard({
  questionTxt,
  flowBtnTxt,
  flowBtnAction,
  data,
  identifiedGender,
  setIdentifiedGender,
}) {
  const [checked, setChecked] = useState("");
  const [isActive, setIsActive] = useState(false);

  function setStates(g) {
    console.log("setstates callsed");
    setIdentifiedGender(g);
    setChecked(g.description);
    setIsActive(true);
  }

  // if checked (if the user have selcted a gender)
  if (identifiedGender !== "")
    return (
      <div className="controlboard">
        <Question questionTxt={questionTxt} />
        <div className="genderLabels">
          {/* look if one which is checked */}
          {data.map((g) =>
            // if one is checked
            checked === g.description ? (
              <div className="genderLabel-selected">
                <div className="genderText" key={g.id}>
                  <GenderLabels
                    genderText={g.description}
                    genderColor={g.color}
                    selectGender={() => setStates(g)}
                  />
                </div>
              </div>
            ) : (
              // if one is not checked
              <div className="genderText" key={g.id}>
                <GenderLabels
                  genderText={g.description}
                  genderColor={g.color}
                  selectGender={() => setStates(g)}
                />
              </div>
            )
          )}
        </div>
        <FlowBtn
          isActive={isActive}
          flowBtnTxt={flowBtnTxt}
          flowBtnAction={flowBtnAction}
        />
      </div>
    );
  // default - the user havn't checked any gender yet
  else
    return (
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
    );
}
