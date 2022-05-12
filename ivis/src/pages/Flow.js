import "./../myStyle.css";
import React, { useState } from "react";
import dataJson from "../data.json";

import Visuals from "../components/Visuals";
import AssignControlBoard from "../components/flow-components/AssignControlBoard";
import IdentityControlBoard from "../components/flow-components/IdentityControlBoard";
import FullCanvas from "../components/FullCanvas";
import Notification from "../components/flow-components/Notification";

export default function Flow(props) {
  const [src, setSrc] = useState();
  const [isActive, setIsActive] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [questionConfirm, setQuestionConfirm] = useState(false);

  function goToQuestion2() {
    console.log("next btn clicked!! ");
    if (isActive) return setQuestion2(true);
  }

  function goToQuestionConfirm() {
    console.log("next btn clickd!! ");
    setQuestion2(false);
    setQuestionConfirm(true);
  }

  function goToHome() {
    console.log("OK btn clickd!! ");
    setQuestionConfirm(false);
    props.setFlow(false);
  }

  // confirmation
  if (questionConfirm)
    return (
      <>
        <Notification confirmAction={goToHome} />
        <div className="p5-sketch">
          <Visuals setSrc={setSrc} data={props.data} />
        </div>
        <FullCanvas imgSrc={src} />
      </>
    );

  // question 2
  if (question2)
    return (
      <>
        <IdentityControlBoard
          questionTxt={"What gender do you want to be identified as at ITU?"}
          flowBtnTxt={"Make"}
          flowBtnAction={goToQuestionConfirm}
          data={dataJson}
          identifiedGender={props.identifiedGender}
          setIdentifiedGender={props.setIdentifiedGender}
        />
        <div className="p5-sketch">
          <Visuals setSrc={setSrc} data={props.data} />
        </div>
        <FullCanvas imgSrc={src} />
      </>
    );
  // question 1
  else
    return (
      <>
        <AssignControlBoard
          isActive={isActive}
          setIsActive={setIsActive}
          questionTxt={"What gender are you assigned to at ITU?"}
          flowBtnTxt={"Next"}
          flowBtnAction={goToQuestion2}
          data={dataJson}
          assignedGender={props.assignedGender}
          setAssignedGender={props.setAssignedGender}
        />
        <div className="p5-sketch">
          <Visuals setSrc={setSrc} data={props.data} />
        </div>
        <FullCanvas imgSrc={src} />
      </>
    );
}
