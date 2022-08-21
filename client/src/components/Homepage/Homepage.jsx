import React from 'react';
import style from './Homepage.module.css';
import { NavLink } from 'react-router-dom';


export default function Homepage() {
    return (
        <div className={style.background} >
            <NavLink to="/">
                <div className={style.lineWhite}>
                    <img src="" alt="" />
                    <button>INGRESAR</button>
                    <div><a href="https://www.google.com">GIT</a><a href="www.google.com">LINKEDIN</a></div>
                </div>
            </NavLink>
        </div>
    )
}