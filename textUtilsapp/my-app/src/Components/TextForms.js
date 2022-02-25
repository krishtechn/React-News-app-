import React, { useState } from "react";

const TextForms = (props) => {
  const [text, settext] = useState("Enter your comment");

  
 //function for converting text to uppercase
  const handelbutton = () => {
    let texts = text.toUpperCase();
    settext(texts);
    props.showalert("success","Convert to uppercase");
  };

  //function for textarea
  const handletextarea = (event) => {
    settext(event.target.value);
  };

  //function for reset text from textarea
  const resetbutton = () => {
    text = "";
    settext(text);
        props.showalert("success", "empty text");
        
    document.title = "TextUtils- reset text";
  };

  //function for converting to lowercase
  const tolowercase = () => {
    let tolower = text.toLowerCase();
    settext(tolower);
    document.title="TextUtils- Convert to lowercase"
        props.showalert("success", "Converted to Lowercase");
  };


  // function for copy button
  const copytext = () => {
    let textdesc = document.getElementById("desc");
    textdesc.select();
    document.execCommand("copy");
    props.showalert("success","copy text")
  };

 // function for removing extra spaces in textarea 
 const RemoveExtraSpaces = ()=>{
  // RegExp in js :/[ ]+/
   let nexttext = text.split(/[ ]+/);
   settext(nexttext.join(" "));
}
 const IncreaseFontSize = ()=>{
    let textdesc = document.getElementById("desc");
    textdesc.style.background="blue";
  }
const removebgcolor = ()=>{
    let textdesc = document.getElementById("desc")
   textdesc.style.background = "white";
   textdesc.style.textAlign='left'
}

  function Clock() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
  const Centertext = ()=>{
    document.getElementById("desc").style.textAlign = "center";
        document.getElementById("desc").style.background = "grey";
  }

  let texts = text.trim();
  let wordlen = text.length == 0 ? "0" : texts.split(" ").length;
  let charlen = texts.length;
  return (
    <>
      <div className="container">
        {Clock()}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            description
          </label>
          <textarea
            className="form-control"
            id="desc"
            rows={10}
            cols={10}
            value={text}
            onChange={handletextarea}
          />
        </div>

        <div className="btn-center">
          <button
            className={`btn btn-${
              props.bgcolor == "white" ? "dark" : "light"
            } mx-3`}
            disabled={texts.length === 0}
            onClick={handelbutton}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-danger mx-3 "
            disabled={texts.length === 0}
            onClick={resetbutton}
          >
            Reset
          </button>
          <button
            disabled={text.length == 0}
            className={`btn btn-${
              props.bgcolor == "white" ? "dark" : "light"
            } mx-3`}
            onClick={tolowercase}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length == 0}
            className={`btn btn-${
              props.bgcolor == "white" ? "dark" : "light"
            } mx-3`}
            onClick={RemoveExtraSpaces}
          >
            RemoveExtra spaces
          </button>
          <button
            disabled={text.length == 0}
            className={`btn btn-${
              props.bgcolor == "white" ? "dark" : "light"
            } mx-3`}
            onClick={IncreaseFontSize}
          >
            increase font size
          </button>
          <button
            className={`btn btn-${
              props.bgcolor == "white" ? "dark" : "light"
            } mx-3`}
            disabled={texts.length === 0}
            onClick={copytext}
          >
            Copy text
          </button>
          <button
            className={`btn btn-${
              props.bgcolor == "white" ? "dark" : "light"
            } mx-3`}
            disabled={texts.length === 0}
            onClick={Centertext}
          >
            center
          </button>

          <button
            className={`btn btn-${
              props.bgcolor == "white" ? "dark" : "light"
            } mx-3`}
            disabled={texts.length === 0}
            onClick={removebgcolor}
          >
            Remove Background Color
          </button>
        </div>
        <div className="container my-5">
          <h1 className="mb-3">Your text summary</h1>
          <p>
            <b>
              {wordlen} Words, {charlen} Character{" "}
            </b>
          </p>
          <h5>
            <b>preview</b>
            <br />
            {text}
          </h5>
        </div>
      </div>
    </>
  );
};

TextForms.defaultProps = {
  heading: "No heading found",
};

export default TextForms;
