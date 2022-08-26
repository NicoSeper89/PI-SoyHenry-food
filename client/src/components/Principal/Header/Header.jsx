import React, { Component } from "react";
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className={style.header}>
                <NavLink to="/recipes">
                    <img className={style.logo} src="https://i.postimg.cc/QMJG1fzd/logohenryfoods.png" alt="logo" />
                </NavLink>
                <form className={style.search}><input type="text" /><input type="submit" /></form>
                <NavLink to="/create">
                    <button >Crear Receta</button>
                </NavLink>
            </div>
        )
    }
}

export default Header;