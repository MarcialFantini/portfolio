import { useState } from "react";

import "./App.css";
import About from "./components/About";
import BtnTop from "./components/BtnTop";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import VideoBack from "./components/VideoBack";
import WhatIDo from "./components/WhatIDo";
import Pop from "./components/Pop";

function App() {
  const [state, setState] = useState(true);
  const [pop, setPop] = useState(false);
  const changeTheme = () => setState(!state);
  const changePop = () => setPop(!pop);
  return (
    <>
      {pop ? <Pop changePop={changePop}></Pop> : null}

      <VideoBack theme={state}></VideoBack>

      <div className="App">
        <Navbar changePop={changePop}></Navbar>

        <Header></Header>
        <WhatIDo></WhatIDo>
        <Projects></Projects>
        <About></About>
        <Skills></Skills>
        <ContactMe></ContactMe>
        <Footer></Footer>
        <BtnTop toggle={changeTheme}></BtnTop>
      </div>
    </>
  );
}

export default App;
