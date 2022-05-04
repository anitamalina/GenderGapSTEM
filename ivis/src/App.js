import "./myStyle.css";
import React, { useState } from "react";

import Home from "./pages/Home";

export default function App() {
  const [question1, setQuestion1] = useState();
  const [question2, setQuestion2] = useState();
  const [questionConfirm, setQuestionConfirm] = useState();

  return (
    <>
      <Home />
    </>
  );
}
