import React from 'react';
import './style.css';

const Header = () => {

    return (
                <div className='navBar'>
                    <div></div>
                    <div></div>
                        <h2 className="navTitle">COVID-19 Tracker</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/information">Information</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                    </ul>
                </div>
    );
};

export default Header;