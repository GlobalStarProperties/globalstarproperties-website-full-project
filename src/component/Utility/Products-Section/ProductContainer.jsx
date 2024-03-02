import Button from "../Button/Button";

const ProductContainer = ({ Product }) => {


    return (
        <>
        <div className="product">
            <div className="product-img">
                <img src={Product.coverImage} alt="Image of these Product" />
            </div>
            <div className="product-info">
                <h3 className='product-name'>{Product.title}</h3>
                <div className="product-details">
                    <span className="price">{Product.price}</span>
                    <span className="location">{Product.location}</span>
                </div>
            </div>
        <Button text={'Buy'} />
        </div>
        </>
    );
}

export default ProductContainer;
