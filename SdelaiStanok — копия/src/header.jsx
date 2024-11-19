import "./css/header.css";

export default function Header() {
  return (
    <header>
      <div className="margin_1200">
        <div className="logo">
          <a href="/">
            <img
              src="https://static.tildacdn.com/tild6635-6136-4537-b333-613134346331/logo-full.svg"
              alt=""
            />
          </a>
        </div>
        <div className="links">
          <div className="gallery-link header-link">
            <a href="gallery">
              <p>Галерея работ</p>
            </a>
          </div>
          <div className="contacts-link header-link">
            <a href="/contacts">
              <p>Контакты</p>
            </a>
          </div>
          <div className="mail-link header-link">
            <a href="mailto:info@sdelaistanok.ru">
              <p>info@sdelaistanok.ru</p>
            </a>
          </div>
          <div className="tel-link header-link">
            <a href="tel:+74955008686">
              <p>+7 (495) 500 86 86</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
