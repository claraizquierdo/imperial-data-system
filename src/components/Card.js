import '../css/components/Card.scss';

import React, { useState } from 'react';

const Card = ({ title, subtitle, description, imageUrl, defaultImageUrl }) => {
    const [image, setImage] = useState(imageUrl)

    const handleImageError = () => {
        setImage(defaultImageUrl);
    }
    return (
        <div className="card">
            <img src={image} alt={title} width="200" onError={handleImageError} />
            <div className="card__body">
                <h3 className="h3">{title}</h3>
                <p>{subtitle}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;