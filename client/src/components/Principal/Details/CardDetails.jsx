import React from "react";
import style from './CardDetails.module.css';

export default function CardDetails({ recipe }) {

    const { id, name, image, healthScore, diets, steps, summary } = recipe;

    return (
        <div className={style.carddetails}>

            <div className={style.card}>
                <div className={style.mainInfo}>
                    <div>
                        <h1>{name[0].toUpperCase() + name.substr(1)}</h1>

                        <h2>Health Score: {healthScore}</h2>

                        <div className={style.dietsConteiner}>
                            {diets.map((diet, i) => <span key={i}>{diet}</span>)}
                        </div>

                        <div className={style.summary}>
                            <span dangerouslySetInnerHTML={{ __html: summary }}></span>
                        </div>
                    </div>
                    <img src={image} alt={`${id}`} />
                </div>
                {
                    (Object.entries(steps).length) ?
                        <div className={style.steps}>
                            <h4>Pasos</h4>
                            {Object.entries(steps).map(([key, value]) => <span key={key}>{key}: {value}</span>)}
                        </div>
                        : null
                }
            </div>
        </div>
    )
}