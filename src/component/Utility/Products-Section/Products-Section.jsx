import { useEffect, useState } from 'react';
import ProductContainer from './ProductContainer';
import Button from '../Button/Button';
import './Products-Section.scss';
import { Link } from 'react-router-dom';

const ProductsSection = ({products}) => {
    const [selectedItems, setselectedItems] = useState([]);

    // For Selecting random product of maximum 4 from product
    const selectRandomItems = (items) => {
        const selectedIndices = new Set();

        while (selectedIndices.size < 4) {
            const randomIndex = Math.floor(Math.random() * items.length);
            selectedIndices.add(randomIndex);
        }

        const selected = Array.from(selectedIndices).map((value, index) => items[index]);
        setselectedItems(selected);
    }

     useEffect(() => {
        const items = products.map((item) => item);
        selectRandomItems(items);
    }, []);

    return (
        <div className='products-section'>
             <h2>Our Products</h2>
             <div className="products-container">
                {selectedItems.map((product, index) => <Link to={`/product/${product.id}`} key={index}><ProductContainer key={`${product}-${index}`} Product={product}/></Link>)}
             </div>
             
             <Link to={'/services'}><Button text={'View All'}/></Link>
        </div>
    );
}

export default ProductsSection;
