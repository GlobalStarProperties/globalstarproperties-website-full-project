import { Link } from "react-router-dom";
import Footer from "../Utility/Footer/Footer";
import Header from "../Utility/Header/Header";
import ServicesProductContainer from "./ServicesProductContainer";
import './Services.scss'
// import ProductsSection from "../Utility/Products-Section/Products-Section";

Header

const Services = ({products, onWhatsappClick}) => {
    return (
        <div>
            <Header onWhatsappClick={onWhatsappClick}/>
            {/* <ProductsSection products={products} /> */}
            <div className="services">
            <h2>Our Services</h2>
                <div className="products-container">
                    {products.map((product, index) => <Link to={`/product/${product.id}`} key={index}><ServicesProductContainer key={`${product}-${index}`} product={product}/></Link>)}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
