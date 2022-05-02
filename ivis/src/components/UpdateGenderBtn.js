import React from "react"
import "./../myStyle.css";

export default function UpdateGenderBtn({ action }) {
    return (
        <>
        <button className="updateGenderBtn" onClick={action}>
          <div>Would you like to update your gender identity?</div>
        </button>
      </>
    )
}