import React from "react"
import "./../myStyle.css";

export default function UpdateGenderBtn ({updateGenderAction}) {
    return (
        <button className="updateGenderBtn" onClick={updateGenderAction}>
          <div>Would you like to update your gender identity?</div>
        </button>
    )
}

