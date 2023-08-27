import React from 'react';
import profile from '../../images/Ellipse 1.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Developers Cafe</h1>
                <img src={profile} alt="" />
            </div>
            <hr className='hr'/>
        </div>
    );
};

export default Header;