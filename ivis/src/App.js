import "./myStyle.css";
import React, { useState } from "react";

import Home from "./pages/Home";
import Flow from "./pages/Flow";

export default function App() {
  const [assignedGender, setAssignedGender] = useState("");
  const [identifiedGender, setIdentifiedGender] = useState("");
  const [flow, setFlow] = useState(false);

  if (flow)
    return (
      <Flow
        setFlow={setFlow}
        assignedGender={assignedGender}
        setAssignedGender={setAssignedGender}
        identifiedGender={identifiedGender}
        setIdentifiedGender={setIdentifiedGender}
      />
    );
  else return <Home setFlow={setFlow} />;
}
