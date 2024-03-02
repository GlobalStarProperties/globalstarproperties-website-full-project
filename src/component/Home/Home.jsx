import Header from './../Utility/Header/Header';
import Footer from './../Utility/Footer/Footer';
import Hero from './../Utility/Hero/Hero';
import Button from './../Utility/Button/Button';
import FeatureSection from './Feature-Section/Feature-Section';
import AboutSection from './AboutSection/AboutSection';
import ProductsSection from '../Utility/Products-Section/Products-Section';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Home = ({products, onWhatsappClick}) => {
    return (
        <div>
            <Header onWhatsappClick={onWhatsappClick}/>
            <Hero 
            mainText={"Looking For A Place To Call A Home ?"} 
            subText={'Discover Exceptional Properties Here...'}
            btn={<Link to={'/services'}><Button text={'Get Stated'}/></Link>}
            />
            <AboutSection />
            <FeatureSection/>
            <ProductsSection products={products}/>
            <Footer/>
        </div>
    );
}

export default Home;
