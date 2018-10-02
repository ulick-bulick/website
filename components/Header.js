import React from "react";
import Nav from "./Nav";
import ScrollDownButton from "./ScrollDownButton";

const Header = props => (
  <header>
    <h1
      data-aos="fade-right"
      data-aos-offset="50"
      data-aos-delay={props.shouldScroll ? 800 : 100}
      data-aos-duration="1000"
      data-aos-easing="cubic-bezier(.05, .69, .14, 1)"
    >
      {props.title}
    </h1>
    {props.shouldScroll && <ScrollDownButton />}
    <style jsx>{`
      header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        height: calc(100vh - 20vw);
      }

      h1 {
        margin: ${props.centered ? 0 : "initial"};
        max-width: ${props.characters};
      }

      @media all and (min-width: 600px) {
        header {
          height: ${props.shouldScroll
            ? `calc(100vh - 4.17vw - 50px)`
            : `50vh`};
        }
        h1 {
          margin-top: 0;
        }
      }
    `}</style>
  </header>
);

export default Header;