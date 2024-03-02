import Header from "../Utility/Header/Header";
import Hero from "../Utility/Hero/Hero";
import Footer from "../Utility/Footer/Footer";
import ProductsSection from "../Utility/Products-Section/Products-Section";
import AboutDetails from "./AboutDetails";
import './About.scss'

const About = ({products, onWhatsappClick}) => {
    return (
        <div className="about-page">
            <Header onWhatsappClick={onWhatsappClick}/>
            <Hero 
            mainText={"WHAT WE DO FOR YOU"} 
            // subText={'Discover Exceptional Properties Here...'}
            // btn={<Button text={'Get Stated'}/>}
            />
            <AboutDetails />
            <ProductsSection products={products}/>
            <Footer/>
        </div>
    );
}

export default About;
