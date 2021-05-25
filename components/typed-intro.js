import React from "react";
import Typed from 'typed.js'

class TypingName extends React.Component {
  componentDidMount() {
    const options = {
      strings: ["Hi! I'm Anant."],
      typeSpeed: 70,
      loop: false,
      showCursor: false,
    };
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default TypingName;