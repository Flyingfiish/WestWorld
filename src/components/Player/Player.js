import React from "react";
import "./style.css";

export default class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <div className="title">
          <h1>Мир дикого запада, все серии</h1>
        </div>
        <iframe
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          id="videocdn"
          title="videocdn"
          src="//48.tvmovies.in/efMCZKhjpdxF/tv-series/505?episode=1&poster=https%3A%2F%2Fwest-world.now.sh%2F&season=1"
          width="800"
          height="492"
          frameborder="0"
        ></iframe>
      </div>
    );
  }
}
