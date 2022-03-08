import styled from "styled-components";
import hero from "./images/mobile/image-hero.jpg";
import heroDesktop from "./images/desktop/image-hero.jpg";

export const Header = styled.header`
  height: 100vh;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;

  .logoHamburgerContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.2rem;
    height: 7rem;
  }

  .logo {
    width: 8rem;
    height: 1.4rem;
  }

  .hamburger {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
  }

  .title {
    color: white;
    padding: 1.3rem;
    font-family: Josefin Sans;
    margin: 0 auto;
    margin-top: 7rem;
    border: 2.5px solid white;
    width: 90%;
    font-weight: 100;
    font-size: 2.3rem;
    word-spacing: 50rem;
  }

  .navBar {
    display: none;
    flex-direction: column;
    justify-content: center;
    margin-top: 40rem;

    width: 100%;
    left: 0;
    position: absolute;
    background-color: black;
    height: 38rem;
  }

  .link {
    font-family: Josefin Sans;
    font-weight: 100;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-left: 3rem;
    color: white;
    text-transform: uppercase;
    margin-left: 2rem;
  }

  .showNavBar {
    display: flex;
  }

  @media screen and (min-width: 800px) {
    background-image: url(${heroDesktop});
    background-size: 100% 100%;
    height: 30rem;
    .hamburger {
      display: none;
    }

    .logoHamburgerContainer {
      padding: 0 3.5rem;
    }

    .navBar {
      display: inline-block;
      position: static;
      height: auto;
      width: auto;
      margin: 0;
      background-color: initial;
    }

    .link {
      text-transform: none;
      font-weight: bold;
      font-size: 0.9rem;
      padding-bottom: 0.3rem;
    }

    .link:hover {
      border-bottom: 2px solid white;
    }

    .title {
      margin-top: 3.5rem;
      font-size: 4rem;
      width: 35rem;
      word-spacing: 0;
      margin-left: 3.5rem;
    }
  }
`;

export const Main = styled.main`
  margin-top: 6rem;

  .interactiveContainer {
    font-family: Josefin Sans;
  }

  .interactiveImg {
    display: block;
    margin: 0 auto;
    width: 20rem;
  }

  .interactiveTitle {
    margin: 3rem 2rem 1rem 2rem;
    text-align: center;
    font-weight: 100;
    font-size: 2rem;
  }

  .interactiveParagraph {
    font-family: Alata;
    text-align: center;
    font-weight: bold;
    opacity: 0.5;
    line-height: 1.7rem;
    margin: 0 2rem;
    font-weight: 100;
  }

  .creationsContainer {
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .creationTitle {
    text-align: center;
    font-size: 2rem;
    font-family: Josefin Sans;
    font-weight: 100;
  }

  .creation {
    display: flex;
    width: 90%;
    height: 33vmin;
    margin-top: 1rem;
    position: relative;
    box-shadow: inset 150px 0px 50px 0px rgba(0, 0, 0, 0.6);
  }

  .creationName {
    align-self: flex-end;
    font-family: Josefin Sans;
    font-weight: 100;
    font-size: 1.5rem;
    padding: 1.2rem;
    color: white;
    width: 11rem;
  }

  .creationImg {
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
  }

  .seeAllBtn {
    margin-top: 2rem;
    background-color: transparent;
    letter-spacing: 0.5rem;
    font-family: Alata;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.6rem 2.2rem;

    border: 2px solid rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 800px) {
    .interactiveContainer {
      margin: 0 auto;
      width: 51rem;
      justify-content: center;
      position: relative;
    }

    .interactiveTitleAndParagraph {
      background-color: white;
      position: absolute;
      width: 30rem;
      bottom: 0;
      right: 0;
    }

    .interactiveParagraph {
      display: block;
      margin: 1rem 3rem;
      margin-bottom: 0;
      font-size: 0.8rem;
      text-align: initial;
    }

    .interactiveImg {
      width: 30rem;
      display: inline;
    }

    .creationsContainer {
      margin: 3rem auto;
      width: 80%;
      max-width: 900px;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }

    .creation {
      box-shadow: inset 70px 0px 70px 0px rgba(0, 0, 0, 0.6);
      width: 12rem;
      height: 55vmin;
      margin: 1rem 0.5rem;
    }

    .creationTitle {
      justify-self: flex-end;
      text-align: initial;
      width: 60%;
      order: -1;
    }

    .seeAllBtn {
      margin-left: 10%;
      margin-bottom: 2rem;
      align-self: flex-end;
      order: -1;
    }

    .creationName {
    }
  }
`;

export const FooterStyles = styled.footer`
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: hsl(0, 0%, 0%);
  height: 30rem;
  font-family: Alata;
  font-weight: 500;
  font-size: 0.95rem;

  .logo {
    width: 10rem;
  }

  .linksContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  .link {
    margin-bottom: 1.2rem;
    color: white;
  }

  .socialLinks {
    display: flex;
    width: 15rem;
    justify-content: center;
    align-items: center;
  }

  .socialLinks > * {
    margin-left: 2rem;
    img {
      width: 1.3rem;
    }
  }

  .copyright {
    margin: 0;
    color: white;
    opacity: 0.5;
    margin-top: 1rem;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
    height: 10rem;

    .linksContainer {
      margin-top: 1rem;
      flex-direction: row;
    }

    .link {
      opacity: 0.9;
      margin-bottom: 0rem;
      margin-right: 2rem;
      font-size: 0.8rem;
      padding-bottom: 0.5rem;
    }

    .link:hover {
      border-bottom: 2px solid white;
    }

    .logo,
    .linksContainer,
    .socialLinks,
    .copyright {
    }

    .copyright {
      font-size: 0.9rem;
    }
  }
`;
