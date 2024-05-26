import React, { useEffect, useRef, useState } from "react";
import "./basic-slider.css";

export const BasicSlider = ({ sliderPics }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesRef = useRef(null);

    useEffect(() => {
        const slides = slidesRef.current.getElementsByClassName("my-slides");

        const showSlides = () => {
            const newIndex = (slideIndex + 1) % slides.length;
            setSlideIndex(newIndex);
        };

        const interval = setInterval(showSlides, 10000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    const picsElements = sliderPics.map((item, index) => {
        const { id, src, alt } = item;

        return (
            <img
                key={id}
                className="my-slides fade"
                src={src}
                alt={alt}
                style={{ display: index === slideIndex ? "block" : "none" }}
            />
        );
    });

    return (
        <div className="basic-slider">
            <div className="slider-container" ref={slidesRef}>
                {picsElements}
            </div>
        </div>
    );
};
