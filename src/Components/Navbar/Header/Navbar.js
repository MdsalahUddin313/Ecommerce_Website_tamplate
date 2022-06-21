import React from "react";
import Header_one from "./Header_one";
import "./header-style.css";
import Header_two from "./Header_two";
//import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
//import bgImage from "../images/bgHeader/bg-header.jpg";
const Navbar = () => {
  // const myStyle = {
  //   backgroundImage: "url(`{bgImage}`)",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  // useEffect(() => {
  //   const hiddenmenu = () => {
  //     if (window.innerWidth > 768 && isOpen) {
  //       setIsOpen(false);
  //       console.log("menu bar closed");
  //     }
  //   };
  //   window.addEventListener("resize", hiddenmenu);
  //   return () => {
  //     window.removeEventListener("resize", hiddenmenu);
  //   };
  // });
  return (
    <div>
      <Header_one />
      <Header_two />
      <Dropdown />
    </div>
  );
};

export default Navbar;
