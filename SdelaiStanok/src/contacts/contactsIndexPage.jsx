import Footer from "../Footer"
import YMap from "../map"
import "./contactsIndexPage.css"
import ContactHeader from "./contactHeader"

const ContactsIndexPage = () => {
    return(
        <div>
            <ContactHeader/>
            <div className="map-contacts">
                <YMap/>
            </div>
            <div className="padding_1200 phone_width" >
                <div className="contacts">
                    <div className="header">
                        <p>Контакты</p>
                    </div>
                    <div className="top">
                        <div className="contact-card tel-mail">
                            <a href="mailto:info@sdelaistanok.ru">info@sdelaistanok.ru</a>
                            <a href="tel:+74955008686">+7 (495) 500 86 86</a>
                            <a href="tel:+79636480000">+7 (963) 648 00 00</a>
                        </div>
                        <div className="contact-card">
                        <p>
                            <b>АДРЕСА ПРОИЗВОДСТВЕННЫХ ПЛОЩАДОК</b><br />
                            г. Москва, ул. Касимовская владение 26<br />
                            г. Жуков (Калужская область) Ул. Пушкина 30
                        </p>
                        </div>
                    </div>
                    <div className="bot">
                        <div className="contact-card">
                        <p>
                            <b>ЮРИДИЧЕСКИЙ АДРЕС</b><br />
                            115 304, Москва, Кантемировская ул, дом 4, корпус 3, квартира 1281
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactsIndexPage;