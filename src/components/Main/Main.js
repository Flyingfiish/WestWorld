import React from "react";
import "./style.css";
import Description from "../Description/Description";
import Player from "../Player/Player";

export default class Main extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <main>
          <Description></Description>
          <Player></Player>
        </main>
      </div>
    );
  }
}
