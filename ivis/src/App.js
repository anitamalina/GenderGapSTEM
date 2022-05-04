import "./myStyle.css";
import React, { useState } from "react";

import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Confirmation from "./pages/Confirmation";

export default function App() {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [questionConfirm, setQuestionConfirm] = useState(false);

  return (
    <>
      <Home question1={question1} setQuestion1={setQuestion1}/>
      <Question1 question2={question2} setQuestion2={setQuestion2} setQuestion1={setQuestion1}/>
      <Question2 questionConfirm={questionConfirm} setQuestionConfirm={setQuestionConfirm} setQuestion2={setQuestion2}/>
      <Confirmation setQuestionConfirm={setQuestionConfirm}/>
    </>
  );
}
