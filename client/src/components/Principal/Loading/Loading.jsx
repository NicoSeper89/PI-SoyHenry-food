import React from "react";
import style from './Loading.module.css';

export default function Loading() {

    return (
        <div className={style.conteinerLoader}>
            <div>
                <span className={style.egg}></span>
                <span className={style.loader}></span>
            </div>
        </div>
    )

}