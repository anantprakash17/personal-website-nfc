import React from "react";
import Typed from 'typed.js'

class TypingName extends React.Component {
  componentDidMount() {
    const options = {
      strings: ["Get your free $25 here!"],
      typeSpeed: 70,
      loop: false,
      showCursor: true,
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