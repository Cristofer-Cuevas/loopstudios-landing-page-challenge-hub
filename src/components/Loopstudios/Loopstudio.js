import React from "react";

import logo from "./assets/images/logo.svg";
import hamburger from "./assets/images/icon-hamburger.svg";
import "./assets/styles/Loopstudios.css";

import "./assets/styles/normalize.css";

const Loopstudios = (props) => {
  return (
    <>
      <header className="headerContainer">
        <div className="logoHamburgerContainer">
          <img className="logo" src={logo} alt="logo" />
          <img className="hamburger" src={hamburger} alt="menu" />
        </div>

<<<<<<< HEAD
        <h1 className="title">immersive experiences that deliver</h1>
=======
        <h1 className="title">
          IMMERSIVE EXPERIENCES <span className="that"> THAT</span> DELIVER
        </h1>
>>>>>>> 53ccd2b0eac5a321940173e758bb36b935fb5148
      </header>
      <main>
        <Creations creations={props.creations} />
      </main>
    </>
  );
};

const Creations = (props) => {
  return props.creations.map((creation) => {
    return <h3>{creation.title}</h3>;
  });
};

<<<<<<< HEAD
const Footer = () => {};
=======
// const Footer = () => {};
>>>>>>> 53ccd2b0eac5a321940173e758bb36b935fb5148

export default Loopstudios;
