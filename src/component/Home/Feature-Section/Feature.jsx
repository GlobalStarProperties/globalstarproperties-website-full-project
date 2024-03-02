import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className="feature">
            <div className="feature-img">
                <img src={feature.img} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
        </div>
    );
}

export default Feature;
