import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "../Utility/Button/Button";

const ServicesProductContainer = ({product}) => {
    return (
        <>
         <div className="product">
            <div className="product-img">
                <img src={product.coverImage} alt="Image of these Product" />
            </div>
            <div className="product-info">
                <h3 className='product-name'>{product.title}</h3>
                <div className="product-details">
                    <span className="price">{product.price}</span>
                    <span className="location">{product.location}</span>
                </div>
            </div>
        <Link to={`/product/${product.id}`}><Button text={'Buy'}/></Link> 
        </div>
        </>
    );
}

export default ServicesProductContainer;
