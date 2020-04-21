import React from "react";
import "./style.css";

export default class Button extends React.Component {
  render() {
    return (
        <a href={this.props.link} className="button" onClick={this.clickHandler}>
          <p className="buttonText">{this.props.text}</p>
        </a>
    );
  }

  clickHandler() {
    console.log("click)))");
  }
}
