import React, { useState } from 'react';

const Card = ({ title, description, imageUrl }) => {
    const [image, setImage] = useState(imageUrl)

    const handleImageError = () => {
        setImage("assets/planets/default.png");
    }
    return (
        <div className="card">
            <img src={image} alt={title} width="200" onError={handleImageError} />
            <div className="card-body">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;