import React from "react";
import Button from "../Button/Button";
import "./style.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttons = [
      <Button key="1" link="/" text="Смотреть онлайн"></Button>,
      <Button key="2" text="Персонажи"></Button>,
      <Button key="3" text="Дата выхода серий"></Button>,
    ];
    return (
      <div className="header">
        <nav>
          <a className="logo" href="/" style={{ textDecoration: "none" }}>
            <h1>WestWorld</h1>
          </a>
          <div className="navContainer">{buttons}</div>
          <a className="main-item" href="#" tabIndex="1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 5 32 32"
              width="32"
              height="32"
            >
              <g
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M30 12 L16 24 2 12" />
              </g>
            </svg>
          </a>
          <div className="sub-menu">{buttons}</div>
        </nav>
        <div className="line"></div>
      </div>
    );
  }
}
