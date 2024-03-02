import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Header from '../Utility/Header/Header';
import Footer from '../Utility/Footer/Footer';
import  './Product.scss';
import ProductsSection from '../Utility/Products-Section/Products-Section';

const SelectedProduct = ({products}) => {

    const { id } = useParams();
    const product = products.filter((item) => item.id == Number(id))[0]; 

    return (
        <div>
             <Header />
             <ProductDetails  product={product}/>
             <ProductsSection products={products}/>
             <Footer />
        </div>
    );
}

export default SelectedProduct;
