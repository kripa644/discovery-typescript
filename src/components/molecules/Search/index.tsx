import { type } from 'node:os';
import React from 'react';
import './style.css';

type SearchProps = {}

const Search: React.FC<SearchProps> = ({ children}) => {
    return (
        <div className='Search'>
            {children}
        </div>
    );
};

export default Search;