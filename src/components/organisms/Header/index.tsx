import { type } from 'node:os';
import React from 'react';
import Image from '../../atoms/Image/index';
import Navbar from '../../molecules/Navbar/index';
import SearchButton, {SearchProps} from '../../molecules/SearchButton/index';
import '../../_settings/_base.css';
import './style.css';

type LogoProps = {
    logo: string,
    logoAlt: string,
    list: string,
    listAlt: string
}

type HeaderDataProps = {
    logo: LogoProps,
    navLinks: Array<string>,
    search: SearchProps
}

type HeaderProps = {
    headerData: HeaderDataProps
}

const Header = ({headerData}: HeaderProps) => {
    return (
        <div className='header'>
            <Image source={headerData.logo.list} width='60%' height='60%' alt={headerData.logo.listAlt}/>
            <Image source={headerData.logo.logo} width='80%' height='100%' alt={headerData.logo.logoAlt}/>
            <Navbar navbarData={headerData.navLinks}/>
            <SearchButton data={headerData.search}/>
        </div>
    );
};

export default Header;