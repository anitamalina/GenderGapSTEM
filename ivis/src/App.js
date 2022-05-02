import "./myStyle.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import UpdateGenderFlow from "./Pages/UpdateGenderFlow"


function App() {
      
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update-gender" element={<UpdateGenderFlow/>} />
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
