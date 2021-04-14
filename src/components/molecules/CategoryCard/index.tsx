import React from 'react';
import './style.css';
import Image from '../../atoms/Image/index';
import Text from '../../atoms/Text/index';

type CategoryCardProps = {
    imageSource: string,
    imageText: string
}

const CategoryCard = ({imageSource, imageText}: CategoryCardProps) => {

    return (
        <div className='categoryCard'>
            <Image className='border-rad-10' source={imageSource} width="100%" height="120" alt={imageText}/>
            <Text className='imageText'>{imageText}</Text>
        </div>
    );
};

export default CategoryCard;