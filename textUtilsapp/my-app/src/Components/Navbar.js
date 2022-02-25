import React, { useState } from "react";
import { Outlet,Link } from "react-router-dom";
import Alerts from "./Alerts";

const Navbar = (prop) => {

  const handlecolorpicker=()=>{
   
  }

 // document.body.style.background = `${prop.mode}`;
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            {prop.titlename}
          </a>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={prop.switchchange}
            />
            <label htmlFor="" className="text-primary">
              {prop.message}
            </label>
            <input type="color" onChange={handlecolorpicker} value="red" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

Navbar.defaultProps = {
  titlename: "set name",
};

export default Navbar;
