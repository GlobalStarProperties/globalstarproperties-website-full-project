import Button from '../../Utility/Button/Button';
import { FaAngleRight } from "react-icons/fa";
import './AboutSection.scss';
import { Link } from 'react-router-dom';


const AboutSection = () => {
    const onClick = () => {
        alert('More About')
    }
    return (
        <div className="aboutContainer">
            <h2>Who We Are</h2>
            <p>
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
            <Link to={'/about'}><Button text={'See More'} icon={<FaAngleRight/>} /> </Link>
        </div>
    );
}

export default AboutSection;
