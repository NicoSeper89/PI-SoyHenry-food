import React from 'react';
import style from './Homepage.module.css';
import { NavLink } from 'react-router-dom';


export default function Homepage() {
    return (
        <div className={style.homepageContainers} >
            <NavLink to="/">
                <button>INGRESAR</button>
            </NavLink>
        </div>
    )
}