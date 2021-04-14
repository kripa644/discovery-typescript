import React from 'react';
import './style.css';
import '../../_settings/_base.css';
import { type } from 'node:os';

type TextButtonProps = {
    className?: string
}

const CarouselTextButtons: React.FC<TextButtonProps> = ({className, children}) => {
    return (
        <div className={`carouselButtons ${className}`}>
            {children}
        </div>
    );
};

export default CarouselTextButtons;