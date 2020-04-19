import React from "react";
import "./style.css";

export default class Button extends React.Component {
  render() {
    return <button className="button" onClick={this.clickHandler}>
        <p className="buttonText">{this.props.text}</p>
    </button>;
  }

  clickHandler() {
      console.log('click)))')
  }
}
