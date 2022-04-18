import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/P1yW6xJ/good1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Private Tutor</h3>
                    <p>Hello, dear students; I am Soroar Mia. I am an English teacher..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/rZz2jmr/good2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Private Tutor</h3>
                    <p>Hello, dear students; I am Soroar Mia. I am an math teacher..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/cJgH2dF/good3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Private Tutor</h3>
                    <p>
                    Hello, dear students; I am Soroar Mia. I am an English teacher..
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;