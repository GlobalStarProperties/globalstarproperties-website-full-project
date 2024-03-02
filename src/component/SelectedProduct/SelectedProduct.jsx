import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Header from '../Utility/Header/Header';
import Footer from '../Utility/Footer/Footer';
import ProductsSection from '../Utility/Products-Section/Products-Section';
import  './Product.scss';

const SelectedProduct = ({products, onWhatsappClick}) => {

    const { id } = useParams();
    const product = products.filter((item) => item.id == Number(id))[0]; 

    return (
        <div>
             <Header onWhatsappClick={onWhatsappClick}/>
             <ProductDetails  product={product} onWhatsappClick={onWhatsappClick}/>
             <ProductsSection products={products}/>
             <Footer />
        </div>
    );
}

export default SelectedProduct;
