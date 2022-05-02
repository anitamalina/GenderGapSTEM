import React from "react";
import "./../myStyle.css";

export default function GenderInfo ({ genderText, genderPercent, genderColor }) {
  return (
    <div style={{ color: genderColor }}>{genderText} {genderPercent}</div>
  )
}