import Footer from "../Utility/Footer/Footer";
import Header from "../Utility/Header/Header";
import Hero from "../Utility/Hero/Hero";
import ContactDetails from "./ContactDetails";
import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact-page">
            <Header />
            <Hero mainText={'Contact Us'}/>
            <ContactDetails />
            <Footer/>
        </div>
    );
}

export default Contact;
