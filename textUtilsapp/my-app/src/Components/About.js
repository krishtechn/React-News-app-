import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function About(props) {
About.defaultProps = {
  desc: "No data found",
};
    
  //const [color,setcolor] = useState("black");

   /* let mystyle = {
      backgroundColor: color,
      color:color=="black"?"white":"",
    };*/

     const [mystyle ,setmystyle] = useState({
        color:'black',
        background:'white',
     })

     const [btntext,setbtntext] = useState("disable dark mode");

  const enabledarkmode = () => {
   // color=="black"?setcolor('white'):setcolor('black');
   if(mystyle.color=='black' && mystyle.background =='white'){
     setmystyle({
       color:'white',
       background:'black',
     })
     setbtntext("enable dark mode");
   }else{
       setmystyle({
         color:'black',
         background:'white',
       })
       setbtntext("diabled dark mode");
     }
   };

    return (
      <>
        <div className="container" style={mystyle}>
          <h2>{props.title}</h2>
          <div className="accordion" id="accordionExample" style={mystyle}>
            <div className="accordion-item" style={mystyle}>
              <h2 className="accordion-header" style={mystyle} id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  {props.desc}
                </div>
              </div>
            </div>
            <button className="btn btn-dark" onClick={enabledarkmode}>
              {btntext}
            </button>
          </div>
        </div>
      </>


    );
}
