import React from "react";
import { useState, useEffect } from "react";
import Img1 from "../asset/casino/1.webp";
import Img2 from "../asset/casino/2.webp";
import { SwitchTransition,CSSTransition } from "react-transition-group";

function ImageSlider() {
    const [images, setImages] = useState([Img1, Img2]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(timerID);
        };
    }, [images]);

    const currentImage = images[currentIndex];

    return (
        <SwitchTransition>
            <CSSTransition classNames="fade" key={currentImage}
                addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            >
                <img
                className="imageSlider rounded-lg"
                    src={currentImage}
                    alt="Imagen"
                />
            </CSSTransition>
        </SwitchTransition>
    );
}

export default ImageSlider;
