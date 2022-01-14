import React, { useState } from "react";
import {
  Outlet,
  Link
} from "react-router-dom";
import "./Navbar.css"

function Navbar() {

   const [activeTab, setActiveTab] = useState(0);

  function tabClick(e) {
    console.log("click");
   const { name } = e.target;
   removeActiveClass();
   setActiveTab( (prevValue) => {
     switch(name){
       case "home":
        addActiveClass(0);
        break;
       case "port":
        addActiveClass(1);
        break;
       case "contact":
        addActiveClass(2);
        break;
       case"about":
        addActiveClass(3);
        break;
       default:
     }
   });
  }

  function removeActiveClass() {
    document.getElementById(getNavElementAtIndex(activeTab)).classList.remove("active");
  }

  function addActiveClass(i) {
    document.getElementById(getNavElementAtIndex(i)).classList.add("active");
    setActiveTab(i);
  }

  function getNavElementAtIndex(i) {
    switch(i){
      case 0:
       return "home";
      case 1:
       return "port";
      case 2:
       return "contact";
      case 3:
       return "about";
      default:
    }
  }

  return (
  <div className = "topnav" >
    <div className = "navbar" >
      <Link className="nav-item active" id="home" name="home" onClick={tabClick} to = "/" > Home < /Link>
      <Link className="nav-item" id="port" name="port" onClick={tabClick} to = "/portfolio" > Portfolio < /Link>
      <Link className="nav-item" id="contact" name="contact" onClick={tabClick} to = "/contact" > Contact < /Link>
      <Link className="nav-item" id="about" name="about" onClick={tabClick} to = "/about" > About < /Link>
      <Link
        to = "*"
        element = {
          <main style = {{"padding": "1rem"}} >
            <p>There 's nothing here!</p>
          </main>
      } > < /Link>
      <Outlet />
    </div>
  </div>
  );
}

export default Navbar;
