import React from "react";
import Button from "../Button/Button";
import "./style.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav>
          <h1 className="logo">WestWorld</h1>
          <Button text="Смотреть онлайн"></Button>
          <Button text="Персонажи"></Button>
          <Button text="Дата выхода серий"></Button>
          
        </nav>
        <div className="line"></div>
      </div>
    );
  }
}
