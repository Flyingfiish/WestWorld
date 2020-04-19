import React from "react";
import "./style.css";
import "../../img/cover.jpg";

export default class Description extends React.Component {
  render() {
    return (
      <div className="block">
        <div className="desc">
          <div className="cover">
            <div id="cover"></div>
            <iframe
              style={{
                marginLeft: "50px",
                boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.75)",
              }}
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              title="trailer"
              width="300"
              height="200"
              src="https://www.youtube.com/embed/0JRdQu4lnIU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="imdb">
              <h1>8.033</h1>
              <hr></hr>
              <p>
                <b> IMDb:</b> 8.70389K
              </p>
            </div>
            <div className="mainroles">
              <h3>В главных ролях</h3>
              <p>
                Тэнди Ньютон Джеффри Райт Эд Харрис Эван Рэйчел Вуд Тесса
                Томпсон Джеймс Марсден Люк Хемсворт Энтони Хопкинс Анджела
                Сарафян Саймон Куотерман
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="info">
            <h1 id="name">
              Мир дикого запада <br></br>
              <span style={{ fontWeight: "lighter" }}>(сериал 2016-...)</span>
            </h1>
            <p
              style={{
                fontWeight: "bold",
                color: "#b2b2b2",
                marginBottom: "20px",
              }}
            >
              WestWorld 18+
            </p>
            <big>
              <big style={{ fontWeight: "bold" }}>О сериале</big>
            </big>
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
                <td className="value">
                  Ричард Дж. Льюис, Джонатан Нолан, Фред Туа, ...
                </td>
              </tr>
              <tr className="infoRow">
                <td className="name">Сценарий</td>
                <td className="value">
                  Майкл Крайтон, Лиза Джой, Джонатан Нолан, ...
                </td>
              </tr>
              <tr className="infoRow">
                <td className="name">Продюсер</td>
                <td className="value">
                  Джей Джей Абрамс, Сьюзэн Экинс, Лиза Джой, ...
                </td>
              </tr>
              <tr className="infoRow">
                <td className="name">Оператор</td>
                <td className="value">
                  Джон Грилло, Дэрран Тирнан, Брендан Гэлвин, ...
                </td>
              </tr>
              <tr className="infoRow">
                <td className="name">Композитор</td>
                <td className="value">Рамин Джавади</td>
              </tr>
              <tr className="infoRow">
                <td className="name">Художник</td>
                <td className="value">
                  Ховард Каммингс, Зак Гроблер, Нэйтан Краули, ...
                </td>
              </tr>
              <tr className="infoRow">
                <td className="name">Монтаж</td>
                <td className="value">
                  Эндрю Секлир, Anna Hauger, Таня М. Свелинг, ...
                </td>
              </tr>
              <tr className="infoRow">
                <td className="name">Жанр</td>
                <td className="value">
                  фантастика, драма, детектив, вестерн, ...
                </td>
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
            <hr></hr>
            <div className="review">
              <h2>Обзор</h2>
              <p>
                В футуристическом парке развлечений «Мир Дикого Запада»
                специально сконструированные андроиды выполняют любые прихоти
                посетителей, чтобы те чувствовали безнаказанность и полную
                свободу действий. Если робота убили - не беда, техники его
                починят, сотрут память и снова поставят в строй, навстречу
                новому дню и новым людским прихотям. Но оказывается, что далеко
                не все роботы теряют воспоминания.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
