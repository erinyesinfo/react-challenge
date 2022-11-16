import React from 'react';
import { default as logo } from '../assets/acme-1.svg';

const Header = () => (
    <div className='header'>
        <i className="fas fa-bars" style={{color: '#7E7F95', fontSize: 26, cursor: 'pointer'}}></i>
        <img src={logo} alt="logo" />
        <i className="fas fa-question-circle" style={{color: '#222766', fontSize: 26, cursor: 'pointer'}}></i>
    </div>
);

export default Header;