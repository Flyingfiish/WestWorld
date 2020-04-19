import React from "react";
import "./style.css";
import "../../img/cover.jpg";

export default class Description extends React.Component {
  render() {
    return (
      <div className="desc">
        <div className="cover">
          <div id="cover"></div>
        </div>
        <div className="info">
          <h1 id="name">
            Мир дикого запада <br></br>
            <span style={{fontWeight: 'lighter'}}>(сериал 2016-...)</span>
          </h1>
          <p style={{fontWeight: 'bold', color: '#b2b2b2', marginBottom: '20px'}}>WestWorld 18+</p>
          <big><big style={{fontWeight:'bold'}}>О сериале</big></big>
          <table>
              <tr className="infoRow">
                  <td className="name">Год производства</td>
                  <td className="value">2016 (3 сезона)</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Страна</td>
                  <td className="value">США</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Слоган</td>
                  <td className="value">«Здесь начинается жизнь»</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Режиссер</td>
                  <td className="value">Ричард Дж. Льюис, Джонатан Нолан, Фред Туа, ...</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Сценарий</td>
                  <td className="value">Майкл Крайтон, Лиза Джой, Джонатан Нолан, ...</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Продюсер</td>
                  <td className="value">Джей Джей Абрамс, Сьюзэн Экинс, Лиза Джой, ...</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Оператор</td>
                  <td className="value">Джон Грилло, Дэрран Тирнан, Брендан Гэлвин, ...</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Композитор</td>
                  <td className="value">Рамин Джавади</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Художник</td>
                  <td className="value">Ховард Каммингс, Зак Гроблер, Нэйтан Краули, ...</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Монтаж</td>
                  <td className="value">Эндрю Секлир, Anna Hauger, Таня М. Свелинг, ...</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Жанр</td>
                  <td className="value">фантастика, драма, детектив, вестерн, ...</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Бюджет</td>
                  <td className="value">$100 000 000</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Премьера в Росcии</td>
                  <td className="value">3 октября 2016</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Премьера в мире</td>
                  <td className="value">30 сентября 2016</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Возраст</td>
                  <td className="value">18+</td>
              </tr>
              <tr className="infoRow">
                  <td className="name">Время</td>
                  <td className="value">62 мин. / 01:02</td>
              </tr>
          </table>
            
        </div>
      </div>
    );
  }
}
