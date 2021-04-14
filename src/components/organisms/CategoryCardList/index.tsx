import React from 'react';
import CategoryCard from '../../molecules/CategoryCard/index';
import './style.css';
import '../../_settings/_base.css';
import { type } from 'node:os';

type CategoryProps = {
    image: string,
    text: string
}

type CardListProps = {
    categoryData: Array<CategoryProps>,
    className?: string
}

const CategoryCardList = ({categoryData, className}: CardListProps) => {
    return (
        <div className={`categoryList ${className}`}>
            {categoryData.map((category, index) => {
                return (
                    <CategoryCard key={index} imageSource={category.image} imageText={category.text}/>
                )
            })}
        </div>
    );
};

export default CategoryCardList;