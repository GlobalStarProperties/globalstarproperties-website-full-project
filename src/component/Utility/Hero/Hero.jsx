import Button from '../Button/Button'
import './Hero.scss';

const Hero = ({mainText, subText, btn}) => {
    return (
        <div className='hero-container'>
            <h1>{mainText}</h1>
            <p>{subText}</p>
            {btn}
        </div>
    );
}

export default Hero;
