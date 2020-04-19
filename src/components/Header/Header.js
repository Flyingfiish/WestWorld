import React from "react";
import Button from "../Button/Button";
import "./style.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav>
          <a href="/" style={{textDecoration:'none'}}>
          <h1 className="logo">WestWorld</h1>
          </a>
          <Button text="Смотреть онлайн"></Button>
          <Button text="Персонажи"></Button>
          <Button text="Дата выхода серий"></Button>
          
        </nav>
        <div className="line"></div>
      </div>
    );
  }
}
