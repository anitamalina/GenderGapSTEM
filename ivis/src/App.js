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

  if (question1) return <Question1 question2={question2} setQuestion2={setQuestion2} setQuestion1={setQuestion1}/>
  if (question2) return <Question2 questionConfirm={questionConfirm} setQuestionConfirm={setQuestionConfirm} setQuestion2={setQuestion2}/>
  if (questionConfirm) return (<Confirmation setQuestionConfirm={setQuestionConfirm}/> )
  if (!questionConfirm) return (<Home setQuestion1={setQuestion1}/> )
}