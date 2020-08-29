import React, { useState,useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show,handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=681&h=383&crop=1"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/c7/2e/82/c72e82a89670deaafc5575eed065d4a8.jpg"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
