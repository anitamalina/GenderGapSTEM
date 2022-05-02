import React from "react";
import "./../../myStyle.css";

export default function GenderLabel({
  genderText,
  genderColor,
  assignedGender,
  setAssignedGender,
  isActive,
  setIsActive,
}) {
  return (
    <div
      className="genderlabel"
      onClick={(e) => {
        setIsActive(!isActive);
        setAssignedGender(genderText)
        console.log("isActive?", isActive);
        console.log("gender?", assignedGender);
      }}
    >
      {!isActive ? (
        <>
          <span
            style={{ backgroundColor: genderColor }}
            className="circle"
          ></span>
          <p className="labeltext">{genderText}</p>
        </>
      ) : (
        <div className="genderlabel-selected">
          <span
            style={{ backgroundColor: genderColor }}
            className="circle"
          ></span>
          <p className="labeltext">{genderText}</p>
        </div>
      )}
    </div>
  );
}
