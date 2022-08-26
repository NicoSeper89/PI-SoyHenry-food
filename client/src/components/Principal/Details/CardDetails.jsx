import React from "react";
import style from './CardDetails.module.css';

export default function CardDetails({ recipe }) {

    const { id, name, image, healthScore, diets, steps, summary } = recipe;

    return (
        <div className={style.carddetails}>

            <h1>Name: {name} <br /> Health Score: {healthScore}</h1>

            <div>
                {diets.map((diet, i) => <span key={i}>{diet}</span>)}
            </div>

            <img src={image} alt={`${id}`} />

            <span dangerouslySetInnerHTML={{ __html: summary }}></span>

            <div className={style.steps}>
                {
                    Object.entries(steps).map(([key, value]) => <span key={key}>{key}: {value}</span>)
                }
            </div>

        </div>
    )
}