import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Main from '../Main/Main';

import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="main-container">
            <Navbar></Navbar>
            <Main></Main>
            <BusinessInfo></BusinessInfo>
            
        </div>
    );
};

export default Header;