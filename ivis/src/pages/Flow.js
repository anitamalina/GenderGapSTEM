import "./../myStyle.css";
import React, { useState } from "react";
import Parse from "parse";
//import dataJson from "../data.json";

import {getGenders} from '../App';

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
  const [assignedGender, setAssignedGender] = useState("");
  const [identifiedGender, setIdentifiedGender] = useState("");

  function goToQuestion2() {
    console.log("next btn clicked!! ");
    console.log(assignedGender);
    if (isActive) return setQuestion2(true);
  }

  async function updateGendersinDB(assignedG, identifiedG) {
    const genderObjects = Parse.Object.extend("gender_itu");
    const query = new Parse.Query(genderObjects);
    const updatedAssigned = assignedG.admitted -1;
    const updatedIdentified = identifiedG.admitted +1;
    console.log("updated admission: ", updatedAssigned);


    try {
      const assignedGender = await query.get(assignedG.id);
      assignedGender.set('admitted', updatedAssigned).save();
      const IdentifiedGender = await query.get(identifiedG.id);
      IdentifiedGender.set('admitted', updatedIdentified).save();
    } catch (error) {
      alert("Failed to update admissions in DB: " + error.message);
    }
  }

  function goToQuestionConfirm() {
    console.log("make btn clickd!! ");
    console.log("identified genderID",identifiedGender);
    updateGendersinDB(assignedGender, identifiedGender);
    setQuestion2(false);
    setQuestionConfirm(true);
  }

  function goToHome() {
    console.log("OK btn clickd!! ");
    getGenders().then((genders) => props.setData(genders));
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
          data={props.data}
          identifiedGender={identifiedGender}
          setIdentifiedGender={setIdentifiedGender}
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
          data={props.data}
          assignedGender={assignedGender}
          setAssignedGender={setAssignedGender}
        />
        <div className="p5-sketch">
          <Visuals setSrc={setSrc} data={props.data} />
        </div>
        <FullCanvas imgSrc={src} />
      </>
    );
}
