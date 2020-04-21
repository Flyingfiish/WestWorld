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
          className="videocdn"
          allowfullscreen="allowFullScreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          id="videocdn"
          title="videocdn"
          src="//48.tvmovies.in/efMCZKhjpdxF/tv-series/505"
          width="640"
          height="480"
          frameborder="0"
        ></iframe>
      </div>
    );
  }
}
