import React, { Component } from "react";
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className={style.header}>
                <NavLink to="/">
                    <img className={style.logo} src="https://i.postimg.cc/QMJG1fzd/logohenryfoods.png" alt="logo" />
                </NavLink>
                <div className={style.inputsContainer}>
                    <NavLink style={{textDecoration: 'none'}} to="/recipes/create">
                        <button className={style.buttonCreate}>Crear Receta</button>
                    </NavLink>
                    <form className={style.search}>
                        <input type="text" />
                        <input className={style.buttonCreate} value={"Buscar"} type="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Header;