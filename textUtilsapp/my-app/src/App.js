import React from "react";
import { useState } from "react/cjs/react.development";
import About from "./Components/About";
import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextForms from "./Components/TextForms";
import logo from "./logo.svg";
import Module, { a, b, c, d } from "./Module1.mjs";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Nopage from "./Components/Nopage";

const App = () => {
  const author = {
    name: "krish",
  };

  setInterval(() => {
     document.title = "Textutils is Amazing";
     document.body.style.background = "yellow";
  }, 2000);

  setInterval(() => {
     document.title = "TextUtils is Awesome";
     document.body.style.background = 'yellow';
  }, 4000);

  const [Navbardark, setNavbardark] = useState("light");
  const [switchstate, setswitchstate] = useState("white");
  const [messagedark, setmessagedark] = useState("disable dark mode");
  let styles = {
    background: switchstate,
    color: switchstate == "black" ? "white" : "",
  };

  const switchchange = () => {
    if (switchstate == "white" && Navbardark == "light") {
      setswitchstate("black");
      setNavbardark("dark");
      //set message for dark is enable
      setmessagedark("success","enable dark mode");
      showAlert("Dark mode has been enable");
          document.body.style.background = "black";
          document.body.style.color = "white";
    } else {
      setswitchstate("white");
      setNavbardark("light");
      //set message for dark is disable
      setmessagedark("disabled dark mode");
      showAlert("success","Dark mode has been disabled");
          document.body.style.background = "white";
          document.body.style.color = "black";
    }
  };

 const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
         setalert({
           type: type,
           msg: message,
         });
    setInterval(() => {
      setalert(null)
    }, 5000);
  }

    document.title = "download our app";

  return (
    <>
      {/* {Module}
    {a}
    {b} */}
      {/* 
  <Navbar
        titlename="Technical krish"
        mode={Navbardark}
        switchchange={switchchange}
        message={messagedark}
      />
     */}
      {/* <Navbar titlename={author.name} />
    <Navbar />  */}

      <Alerts alert={alert} />
      <div classNameName="container" style={styles}>
        <h1>hello</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navbar
                titlename="Technical krish"
                mode={Navbardark}
                switchchange={switchchange}
                message={messagedark}
              />
            }
          >
            <Route
              index
              element={
                <TextForms
                  bgcolor={switchstate}
                  heading="Enter the text to analyze"
                  showalert={showAlert}
                />
              }
            />
            <Route
              path="About"
              element={
                <About
                  title="About page"
                  desc="is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow"
                />
              }
            />

            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;