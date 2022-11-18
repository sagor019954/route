import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    // this is the navbar of the website
    return (
        <div className='link'>
            <NavLink className={({ isActive }) =>
                isActive ? 'isActive' : undefined
            } to="/home">Home</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'isActive' : undefined
            } to="/index">Index</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'isActive' : undefined
            } to="/about">About</NavLink>
            <NavLink className={({ isActive }) =>
                isActive ? 'isActive' : undefined
            } to="/products">Products</NavLink>
        </div>
    );
};

export default Header;