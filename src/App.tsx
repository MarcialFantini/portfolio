import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WhatIDo from "./components/WhatIDo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <WhatIDo></WhatIDo>
      <Projects></Projects>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
