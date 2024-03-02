import Footer from "../Utility/Footer/Footer";
import Header from "../Utility/Header/Header";
import Hero from "../Utility/Hero/Hero";
import ContactDetails from "./ContactDetails";
import './Contact.scss';

const Contact = ({onWhatsappClick}) => {
    return (
        <div className="contact-page">
            <Header onWhatsappClick={onWhatsappClick}/>
            <Hero mainText={'Contact Us'}/>
            <ContactDetails onWhatsappClick={onWhatsappClick}/>
            <Footer/>
        </div>
    );
}

export default Contact;
