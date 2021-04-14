import React from 'react';
import './style.css';
import Text from '../Text/index';
import { type } from 'node:os';

type IndicatorProps = {
    handleClick: () => void,
    className?: string,
}

const CarouselIndicator: React.FC<IndicatorProps> = ({ handleClick, className}) => {
    return (
        <Text className={className} handleClick={handleClick}/>
    );
};

export default CarouselIndicator;