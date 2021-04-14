import React from 'react';
import './style.css';
import Search from '../Search/index';
import Button, {ButtonType, ButtonTheme} from '../../atoms/Button/index';
import Image from '../../atoms/Image/index';
import Input from '../../atoms/Input/index';

export type SearchProps = {
    placeholder: string,
    button: string,
    searchIcon: string
}

type SearchButtonProps = {
    data: SearchProps
}

const SearchButton = ({data}: SearchButtonProps) => {
    return (
        <div className='SearchButton'>
            <Search>
                <Input type="text" className='search-input' placeholder={data.placeholder}/>
                <Image source={data.searchIcon} className="searchIcon" />
            </Search>
            <Button type={ButtonType.SUBMIT} theme={ButtonTheme.PRIMARY} className='display'>{data.button}</Button>
        </div>
    );
};

export default SearchButton;