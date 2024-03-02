import { useState } from 'react';
import Feature from './Feature';
import './Feature-Section.scss';

const FeatureSection = () => {
    const [feature, setFeature] = useState([
        {
            img: './image/features/feature-image-2.jpg',
            title: 'Southern Suburbs Specialists',
            text: 'We have in-depth knowledge of every corner, from established neighborhoods to up-and-coming gems. Let us guide you to your perfect location.'
        },
        {
            img: './image/features/feature-image-1.jpg',
            title: 'Seamless Experience from Start to Finish',
            text: 'We handle every detail, from property search to closing, providing personalized support throughout the process.'
        },
        {
            img: './image/features/feature-image-4.jpg',
            title: 'Your Success is Our Priority',
            text: 'We listen to your needs, understand your goals, and go above and beyond to ensure a smooth and successful transaction.'
        },
        {
            img: './image/features/feature-image-3.jpg',
            title: 'Delivering Results for Satisfied Clients',
            text: 'We have a proven history of success, helping countless clients achieve their real estate dreams. See our testimonials!'
        }
    ])

    return (
        <div className='features-section'>
            <h2>What We Offer</h2>
        <div className="feature-container">
            {feature.map((item, index) => <Feature key={index} feature={item}/>)}
        </div>
        </div>
    );
}

export default FeatureSection;
