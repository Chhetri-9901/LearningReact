import React, { useEffect, useState } from 'react';

const ApiCalling = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imagesList = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('API Error:', error);
            }
        };

        imagesList();
    }, []); 
    return (
        <div>
            {images.map((elem) => (
                <div key={elem.id}>{elem.id} {elem.author}</div>
            ))}
        </div>
    );
};

export default ApiCalling;
