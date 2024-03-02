import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import Button from "../Utility/Button/Button";
import Slideshow from "./Slideshow";

const ProductDetails = ({product}) => {
    const [readMore, setReadMore] = useState(false);
    const {id, title, images, ...others} = product;
    const onClickBtn = () => {

    }

    // const slideshow = images.map((item, index) => {
        
    // })

    return (
        <div className="product-details-container">
            <div className="product-details">

                {/* Slide show component */}
                <Slideshow images={images} />

                {/* Product Infomation */}
                <div className="product-info">
                    <h2 className="title">{title}</h2>
                    <p className="price">{others.price}</p>
                    <p className="location"> <span className="icon"><MdLocationPin /></span> <span>{others.location}</span> </p>
                    {/* <p className="features">{others.features ? others.features : ''}</p> */}
                    <Button text={'Buy On Whatsapp'} icon={<IoLogoWhatsapp/>} iconColor={'green'}  onClick={onClickBtn}/> 
                </div>
            </div>

            <hr />

        {/* Product Description */}
            <div className="product-description">
                <h2 onClick={ () => setReadMore(!readMore) }><span>Description</span> <span style={{transform: !readMore ? `rotate(0deg) ` : `rotate(180deg)`}} className="icon"><FaChevronDown /></span></h2>
                <p style={{height: readMore ? 'auto' : '160px'}}>
                At <b style={{color: '#03011d'}}>Global Star Properties</b>, we transcend the ordinary real estate experience. 
                We specialize in unlocking the true potential of the southern suburbs of Johannesburg, 
                South Africa, acting as your local compass through the vibrant tapestry of communities, hidden gems, 
                and up-and-coming neighborhoods.
                Our unwavering focus sets us apart. Unlike others spread thin across diverse regions, 
                we dedicate our expertise solely to the southern suburbs. 
                This focus translates into unparalleled market knowledge, encompassing trends, nuances, and anticipated shifts. 
                We understand local regulations, possess an intimate understanding of every corner, and anticipate opportunities, 
                from established favorites to emerging hotspots.
                
                At <b style={{color: '#03011d'}}>Global Star Properties</b>, we transcend the ordinary real estate experience. 
                We specialize in unlocking the true potential of the southern suburbs of Johannesburg, 
                South Africa, acting as your local compass through the vibrant tapestry of communities, hidden gems, 
                and up-and-coming neighborhoods.
                Our unwavering focus sets us apart. Unlike others spread thin across diverse regions, 
                we dedicate our expertise solely to the southern suburbs. 
                This focus translates into unparalleled market knowledge, encompassing trends, nuances, and anticipated shifts. 
                We understand local regulations, possess an intimate understanding of every corner, and anticipate opportunities, 
                from established favorites to emerging hotspots.
                
                </p>
            </div>
        </div>
    )
}

export default ProductDetails;