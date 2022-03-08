/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Header, Main, FooterStyles } from "../styles/HomeStyles";
import imageInteractive from "../styles/images/mobile/image-interactive.jpg";

import logo from "../styles/images/logo.svg";
import hamburger from "../styles/images/icon-hamburger.svg";
import facebookLogo from "../styles/images/icon-facebook.svg";
import twitterLogo from "../styles/images/icon-twitter.svg";
import pinterestLogo from "../styles/images/icon-pinterest.svg";
import instagramLogo from "../styles/images/icon-instagram.svg";
import closeImg from "../styles/images/icon-close.svg";

const Loopstudios = (props) => {
  const handleHamburgerClick = (e) => {
    e.target.nextSibling.classList.toggle("showNavBar");
    if (e.target.nextSibling.classList.contains("showNavBar")) {
      e.target.parentElement.style.backgroundColor = "black";
      e.target.src = closeImg;
    } else {
      e.target.src = hamburger;
      e.target.parentElement.style.backgroundColor = "";
    }
  };

  return (
    <>
      <Header className="headerContainer">
        <div className="logoHamburgerContainer">
          <img className="logo" src={logo} alt="logo" />
          <img onClick={handleHamburgerClick} className="hamburger" src={hamburger} alt="menu" />
          <nav className="navBar">
            <a className="link" href="#">
              About
            </a>
            <a className="link" href="#">
              Careers
            </a>
            <a className="link" href="#">
              Events
            </a>
            <a className="link" href="#">
              Products
            </a>
            <a className="link" href="#">
              Support
            </a>
          </nav>
        </div>

        <h1 className="title">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </Header>
      <Main>
        <div className="interactiveContainer">
          <img src={imageInteractive} className="interactiveImg" alt="VR" />
          <div className="interactiveTitleAndParagraph">
            <h2 className="interactiveTitle">THE LEADER IN INTERACTIVE VR</h2>
            <p className="interactiveParagraph">Founded in 2011, Loopstudios has been producing word-class virtual reality projects from some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their band.</p>
          </div>
        </div>
        <Creations creations={props.creations} />
      </Main>
      <Footer />
    </>
  );
};

const Creations = ({ creations }) => {
  console.log(window.outerWidth);
  return (
    <div className="creationsContainer">
      <h2 className="creationTitle">OUR CREATIONS</h2>
      {creations
        ? creations.map((creation) => {
            return (
              <div key={creation.id} className="creation">
                <img className="creationImg" src={creation.img} alt="creation" />
                <h4 className="creationName">{creation.name}</h4>
              </div>
            );
          })
        : null}
      <button className="seeAllBtn">SEE ALL</button>
    </div>
  );
};

const Footer = () => {
  return (
    <FooterStyles>
      <div className="rightBox">
        <img className="logo" src={logo} alt="logo" />
        <div className="linksContainer">
          <a className="link" href="#">
            About
          </a>
          <a className="link" href="#">
            Careers
          </a>
          <a className="link" href="#">
            Events
          </a>
          <a className="link" href="#">
            Products
          </a>
          <a className="link" href="#">
            Support
          </a>
        </div>
      </div>

      <div className="leftBox">
        <div className="socialLinks">
          <a>
            <img src={facebookLogo} alt="facebook logo" />
          </a>
          <a>
            <img src={twitterLogo} alt="twitter logo" />
          </a>
          <a>
            <img src={pinterestLogo} alt="pinterest logo" />
          </a>
          <a>
            <img src={instagramLogo} alt="instagram logo" />
          </a>
        </div>
        <p className="copyright">&copy; 2021 Loopstudios. All rights reserved.</p>
      </div>
    </FooterStyles>
  );
};

export default Loopstudios;
