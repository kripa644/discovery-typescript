import React, {useState, useEffect} from 'react';
import './style.css';
import '../../_settings/_base.css';
import Image from '../../atoms/Image/index';
import CarouselText, {CarouselTextProps} from '../../molecules/CarouselText/index';
import CarouselIndicator from '../../atoms/CarouselIndicator/index';

interface CarouselProps {
    carouselData: Array<CarouselTextProps>,
    handleClick?: () => void,
    className?: string
}

const Carousel = ({carouselData, handleClick, className}: CarouselProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const next = (currentIndex + 1) % carouselData.length;
        const id = setTimeout(() => setCurrentIndex(next), 3000);
        return () => clearTimeout(id);
    }, [currentIndex]);

    const previous = () => {
        const index = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const next = () => {
        const index = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const activeImages = carouselData.slice(currentIndex, currentIndex + 1);
    return (
        <>
            {activeImages.map((item, index) => {
                return (
                    <div className={`carousel ${className}`} key={index} onClick={handleClick}>
                        <Image source='left-arrow.svg' width='24' height='24' handleClick={previous} alt='Left' className='align-center'/>
                        <CarouselText data={item}/>
                        <Image source={item.image.img} width="100%" height="450"/>
                        <Image source='right-arrow.svg' width='24' height='24' handleClick={next} alt='Right' className='align-center'/>
                    </div>
                );
            })}
            <div className='carouselIndicator'>
                {carouselData.map((item, index) => {
                    return (
                        <CarouselIndicator key={index} handleClick={() => setCurrentIndex(index)} className={`${currentIndex === index ? 'carouselIndicatorActive' : 'carouselIndicatorInactive'}`}/>
                    );
                })}
            </div>
        </>
    );
};

export default Carousel;