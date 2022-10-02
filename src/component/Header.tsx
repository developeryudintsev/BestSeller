import React from 'react';
import cart from "../assets/img/cart.svg";
import logo from "../assets/img/logo.svg";
import s from '../App.module.css';

function Header() {
    return (
        <div className={s.header}>
            <img src={logo} alt="logo" />
            <img src={cart} alt="cart icon" />
        </div>
    );
}

export default Header;
