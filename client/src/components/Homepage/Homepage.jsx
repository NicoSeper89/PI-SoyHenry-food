import React from 'react';
import style from './Homepage.module.css';
import { NavLink } from 'react-router-dom';


export default function Homepage() {
    return (
        <div className={style.background} >
            <div className={style.card}>
                <img src="https://i.postimg.cc/GhR38WC4/newLogo.png" alt="logo" />
                <NavLink to="/recipes">
                    <button className={style.button}>INGRESAR</button>
                </NavLink>
                <div className={style.socialDiv}>
                    <a target="_blank" href="https://www.linkedin.com/in/nicolassepertino/" rel='noreferrer'><img src="https://i.postimg.cc/xThMr2PB/logo-Linkedin.png" alt="github" />LINKEDIN</a>
                    <a target="_blank" href="https://github.com/NicoSeper89" rel='noreferrer'><img src="https://i.postimg.cc/Vs9NRcSz/logo-Git-Hub.png" alt="github" />GITHUB</a>
                </div>
            </div>
        </div>
    )
}