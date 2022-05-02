import "./../myStyle.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import React, {useState, useNavigate} from "react";


// components
import Visuals from "../components/Visuals";
import Sphere from "../components/Sphere";
import ControlBoard from "./../components/update-gender-components/ControlBoard"

import data from "./../data.json"

export default function UpdateGenderFlow(props) {

  const initState = {
    currentQuestion: 2,
  };

  const [questionState, setQuestionState] = useState(initState);
  const [assignedGender, setAssignedGender] = useState();
  const [newGender, setNewGender] = useState();

  /* const navigate = useNavigate(); */

  function handleQuestionFlow() {
    console.log("i clicked here!")
/*     if (assignedGender ===! undefined) {
      setQuestionState(questionState.currentQuestion - 1)
      // if question one answered, are there more questions?
      if (questionState.currentQuestion < 2) {
        // yes, move to the next question
        setQuestionState((prevState) => ({
          currentQuestion: prevState.currentQuestion - 1,
        }));
      } else navigate("/home"); // no more questions, move to home
    }  */
  }

  return (
    <>
      <ControlBoard questionTxt="What gender are you assigned to at ITU?" flowBtnTxt="Next" flowBtnAction={handleQuestionFlow} data={data} assignedGender={assignedGender} setAssignedGender={setAssignedGender}/>
      <div className="p5-sketch">
        <Visuals setSrc={props.setSrc}/>
      </div>
    <Canvas className="canvas" >
      <OrbitControls />
      <Stars />
      <Sphere position={[0, 0, 0]} src={props.src}/>
    </Canvas>
    </>
  );
}

