import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GalleryPreview from "./GalleryPreview";
import QuestionList from "./QuestionList";
import Header from "../header";
import Footer from "../Footer";
import "../css/mainPage.css";
import YMap from "../map";

console.log("main page loaded");

const MainPage = () => {
  return (
    <>
      <Header/>
      <div className="video-header">
        <video autoPlay loop muted className="abs-box background-video">
          <source
            src="https://www.sdelaistanok.ru/wp-content/uploads/2024/02/IMG_8014.mov"
          />
        </video>
        <div className="padding_1200 phone_width" >
          <div className="header-text">
            <div className="title">
              <h1>
                Металлообработка<br />
                на ЧПУ станках
              </h1>
            </div>
            <div className="subtitle">
              <h3>Высокоточная обработка на современном оборудовании.</h3>
            </div>
          </div>
          <div className="header-button">
            <a href="/gallery" id="gallery-button">
              <div className="div-button">Перейти в портфолио</div>
            </a>
          </div>
        </div>
      </div>
      <div className="padding_1200 phone_width" >
        <div className="main-page_about">

          <div className="materials">
            <div className="image-blocks-materials">
              <div className="material material-titan titan">
                <img src="src/assets/titan-tubes-redux.png" alt="titan" id="titan" />
                <div
                  className="background-block-orange background-block block-orange"
                ></div>
                <div
                  className="background-block-white background-block block-white"
                ></div>
                <div
                  className="background-block-darkblue background-block block-darkblue"
                >
                  <a className="titan-text text"><b>Титановые сплавы</b></a>
                </div>
              </div>
              <div className="material material-steel steel">
                <div className="background-block-1 top-block">
                  <a id="stainless"><b>Нержавеющая</b></a>
                </div>
                <div className="background-block-2 top-block">
                  <a id="black"><b>Черная</b></a>
                </div>
                <div className="background-block-3 top-block">
                  <a id="heat-resistant"><b>Жаропрочная</b></a>
                </div>
                <div className="background-block-4 top-block">
                  <a id="steel"><b>Сталь</b></a>
                </div>
                <div className="img-blocks-steel">
                  <img
                    src="src/assets/chain.png"
                    alt="steel-img-1"
                    id="steel-img-1"
                  />
                  <img
                    src="/src/assets/rezka-lazer.jpg"
                    alt="steel-img-2"
                    id="steel-img-2"
                  />
                </div>
              </div>
              <div className="material material-metal metal">
                <div className="abs-box background-block-white"></div>
                <div className="metal-img">
                  <img
                    src="/src/assets/stanok-tokar.png"
                    alt="metal"
                    id="metal"
                    className="abs-box"
                  />
                </div>
                <div className="abs-box front-block-darkblue darkblue">
                  <a className="metal-text"><b>Цветные металлы</b></a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-and-plastic plastic">
            <div className="about">
              <div className="about-block">
                <div className="about-header header">
                  <a className="about-header-text"><b>О нас</b></a>
                </div>
                <div className="about-description-text">
                  <div id="abz1">
                    Мы берем в работу титановые сплавы, жаропрочные и нержавеющие
                    стали, черные стали, цветные металлы и технические пластики.
                  </div>
                  <div id="abz2">
                    Любим работу посложнее, специализируемся на сложных и дорогих
                    изделиях.
                  </div>
                  <div id="abz3">
                    Мы открытая компания, Вы всегда можете посетить наше
                    производство и пообщаться со специалистами.
                  </div>
                </div>
              </div>
              <div className="abs-box about-orange-lines orange-lines">
                <div className="abs-box line-1 line"></div>
                <div className="abs-box line-2 line"></div>
                <div className="abs-box line-3 line"></div>
              </div>
            </div>
            <div className="material-plastic plastic">
              <div className="abs-box plastic-img">
                <img src="src/assets/plastic-2.jpg" alt="plastic" id="plastic" />
              </div>
              <div className="abs-box front-block-lightblue">
                <a id="tech-plastic"><b>Технический пластик</b></a>
              </div>
              <div className="abs-box background-block-darkblue"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-and-contact-preview">
        <div className="background-video-block">
          <video autoPlay loop muted className="background-video">
            <source
              src="https://www.sdelaistanok.ru/wp-content/uploads/2024/02/IMG_8014.mov"
            />
          </video>
        </div>
        <div className="padding_1200 phone_width" >
          <div className="gallery-preview">
            <div className="gallery-preview_header">
              <h1>Галерея</h1>
            </div>
            <GalleryPreview/>
          </div>
          <div className="contacts-preview">
            <div className="contacts-preview_header">
              <h1>Контакты</h1>
            </div>
            <div className="contacts-preview_cards">
              <div className="mail-phone contact-card-preview">
                <b>
                  <a
                    id="mail-link"
                    className="link"
                    href="mailto:info@sdelaistanok.ru"
                  >
                    <div className="contacts_mail">info@sdelaistanok.ru</div>
                  </a>
                  <a id="tel-link-1" className="link" href="tel:+74955008686">
                    <div className="contacts_tel">+7 (495) 500 86 86</div>
                  </a>
                  <a id="tel-link-2" className="link" href="tel:+79636480000">
                    <div className="contacts_tel">+7 (963) 648 00 00</div>
                  </a>
                </b>
              </div>
              <div className="address contact-card-preview">
                <div className="card-header">
                  <b>АДРЕСА ПРОИЗВОДСТВЕННЫХ ПЛОЩАДОК</b>
                </div>
                <div className="addresses">
                  <div id="address-1">г. Москва, ул. Касимовская владение 26</div>
                  <div id="address-2">
                    г. Жуков (Калужская область) Ул. Пушкина 30
                  </div>
                </div>
              </div>
              <div className="legal-address contact-card-preview">
                <div className="card-header"><b>ЮРИДИЧЕСКИЙ АДРЕС</b></div>
                <div id="address-3">
                  115 304, Москва, Кантемировская ул, дом 4, корпус 3, квартира
                  1281
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="advantages">
        <div className="padding_1200 phone_width" >
          <div className="advantage-header">
            <div className="header-text">
              <h1>Почему выбирают нас</h1>
            </div>
          </div>
          <div className="advantages-cards">
            <div className="advantage-card">
              <img
                src="https://static.tildacdn.com/tild6631-3463-4465-b233-386134356139/loading_transporter_.svg"
                alt="advantage"
              />
              <div className="card-text">
                <div className="card-header">
                  <p>Любой объем</p>
                </div>
                <div className="card-desc">
                  <p>Делаем от 1 детали.</p>
                  <p>(минимальный заказ от 50 тысяч рублей)</p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <img
                src="https://static.tildacdn.com/tild6231-3961-4961-a663-663530323763/operator_logistican.svg"
                alt="advantage"
              />
              <div className="card-text">
                <div className="card-header">
                  <p>Компетентность</p>
                </div>
                <div className="card-desc">
                  <p>
                    Позвонив нам, Вы общаетесь со специалистом по металлообработке
                    с многолетним опытом работы
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <img
                src="https://static.tildacdn.com/tild3862-3937-4232-a664-346337346437/courier_person.svg"
                alt="advantage"
              />
              <div className="card-text">
                <div className="card-header">
                  <p>Собственник</p>
                </div>
                <div className="card-desc">
                  <p>
                    Мы не являемся посредниками и не берем заказы, которые потом
                    отдаем на субподряд.
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <img
                src="https://static.tildacdn.com/tild3430-3431-4262-b864-656336653435/speed_time_fast.svg"
                alt="advantage"
              />
              <div className="card-text">
                <div className="card-header">
                  <p>Сроки</p>
                </div>
                <div className="card-desc">
                  <p>Средний срок исполнения заказа 21 календарный день.</p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <img
                src="https://static.tildacdn.com/tild6330-3532-4233-a665-616631363732/security_safety_lock.svg"
                alt="advantage"
              />
              <div className="card-text">
                <div className="card-header">
                  <p>Ответственность</p>
                </div>
                <div className="card-desc">
                  <p>
                    Мы ответственно ведем бизнес, никаких записей разговоров,
                    роботов, ответов по шаблону и т.д.
                  </p>
                </div>
              </div>
            </div>
            <div className="advantage-card">
              <img
                src="https://static.tildacdn.com/tild3734-6266-4035-a364-326566613630/van_delivery.svg"
                alt="advantage"
              />
              <div className="card-text">
                <div className="card-header">
                  <p>Доставка</p>
                </div>
                <div className="card-desc">
                  <p>
                    Доставка по всей России за наш счет любым удобным для Вас
                    способом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-capabilities">
        <div className="background-images"></div>
        <div className="padding_1200 phone_width" >
          <div className="capabilities-header">
            <h3>Наши технические возможности</h3>
          </div>
          <div className="capabilities-list">
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>Обработка торцов деталей с высотой торца до 1500 мм.</p>
              </div>
            </div>
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>Обработка тонких деталей на вакуумных столах.</p>
              </div>
            </div>
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>
                  Глубокое сверление до 600 мм за 1 установку на токарных станках.
                </p>
              </div>
            </div>
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>
                  Глубокое сверление до 500 мм за 1 установку на фрезерных
                  станках.
                </p>
              </div>
            </div>
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>Фрезерная 3х осевая обработка в габаритах 1500х840х150 мм.</p>
              </div>
            </div>
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>
                  Фрезерная 4х осевая обработка в режимах 3+1 и 4. Макс. диаметр
                  300 мм.
                </p>
              </div>
            </div>
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>Токарная обработка 2-х осевая D200 L760</p>
              </div>
            </div>
            <div className="capabilities-item">
              <div className="item-image">
                <img
                  src="https://static.tildacdn.com/tild6635-3530-4935-b832-633163303536/checkmark-svgrepo-co.svg"
                  alt=""
                />
              </div>
              <div className="item-description">
                <p>
                  Токарная обработка 2-х осевая прутков с диаметром до 32 мм
                  включительно
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="order">
        <div className="background-images">
          <img src="src/assets/rezka-vertical.png" alt="" className="order-bg-img" id="order-bg-img-1" />
          <img src="src/assets/3d-model.jpg" alt="" className="order-bg-img" id="order-bg-img-2" />
          
        </div>
        <div className="padding_1200 phone_width" >
          <div className="front-order-block">
            <div className="header">
              <h3>Как сделать заказ</h3>
            </div>
            <div className="desc">
              <p>
                Для размещения заказ просим вас
                <b> направить комплект документации</b> на электронную почту
                info@sdelaistanok.ru, мы направим <b>предложение</b> в течение 24
                часов.
              </p>
              <div className="fast-check">
                <p>
                  Для более быстрой проработки заявки желательно в комплект
                  документации включить следующее
                </p>
              </div>
              <div className="order-fast-check-list">
                <div className="list-item">
                  <div className="check-image">
                    <img
                      src="https://static.tildacdn.com/tild3032-3235-4363-a562-373432383761/Group_1272.svg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <p>3Д модели деталей в формате .stp</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="check-image">
                    <img
                      src="https://static.tildacdn.com/tild3032-3235-4363-a562-373432383761/Group_1272.svg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <p>
                      Чертежи деталей в формате .pdf (чертежи нужны только если
                      есть особые требования, допуски, шероховатости и т.д.)
                    </p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="check-image">
                    <img
                      src="https://static.tildacdn.com/tild3032-3235-4363-a562-373432383761/Group_1272.svg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <p>ИНН организации</p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="check-image">
                    <img
                      src="https://static.tildacdn.com/tild3032-3235-4363-a562-373432383761/Group_1272.svg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <p>
                      Если Вы предоставляете материал или заготовки
                      самостоятельно, просьба указать также в каких размерах будет
                      предоставлен материал.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="question">
        <div className="padding_1000">
          <div className="question-header">
            <h3>Вопрос/Ответ</h3>
          </div>
          <QuestionList/>
        </div>
      </div>
      <div className="map">
        <div className="header">
          <h3>Где можно нас найти</h3>
        </div>
        <div className="ya-map-block">
          <YMap/>
        </div>
      </div>
      <Footer/>
    </>

  );
}

export default MainPage;