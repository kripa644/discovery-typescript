import React from 'react';
import './style.css';
import '../../_settings/_base.css';
import Text from '../../atoms/Text/index';
import CarouselPlayButton from '../CarouselPlayButton/index';
import CarouselTextButtons from '../CarouselTextButtons/index';
import Button, {ButtonType, ButtonTheme} from '../../atoms/Button/index';
import { type } from 'node:os';

type CarouselImageProps = {
    img: string,
    imgAlt: string
}

export type CarouselTextProps = {
    heading: string,
    subHeading: string,
    tag1: string,
    tag2: string,
    image: CarouselImageProps
}

type TextProps = {
    data: CarouselTextProps
}

const CarouselText = ({data}: TextProps) => {
    return (
        <div className='carouselText'>
            <Text className='carouselHeading'>{data.heading}</Text>
            <Text className='carouselSubheading'>{data.subHeading}</Text>
            <CarouselTextButtons className='margin-top-20'>
                <Button type={ButtonType.SUBMIT} theme={ButtonTheme.SECONDARY}>
                    {data.tag1}
                </Button>
                <Button type={ButtonType.SUBMIT} theme={ButtonTheme.SECONDARY} className='margin-left-10'>
                    {data.tag2}
                </Button>
            </CarouselTextButtons>
            <CarouselPlayButton className='margin-top-20'/>
        </div>
    );
};

export default CarouselText;