import '../css/Card.scss';

import React, { useState } from 'react';

const Card = ({ title, description, population, imageUrl }) => {
    const [image, setImage] = useState(imageUrl)

    const handleImageError = () => {
        setImage("assets/planets/default.png");
    }
    return (
        <div className="card">
            <img src={image} alt={title} width="200" onError={handleImageError} />
            <div className="card__body">
                <h3 className="h3">{title}</h3>
                <p>{description}</p>
                <p>{`Population: ${population}`}</p>
            </div>
        </div>
    );
};

export default Card;