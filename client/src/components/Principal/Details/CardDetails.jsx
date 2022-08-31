import React from "react";
import { useHistory } from "react-router-dom";
import style from './CardDetails.module.css';

export default function CardDetails({ recipe }) {

    const { id, name, image, healthScore, diets, steps, summary } = recipe;

    const history = useHistory();

    const onBack = (e) => {
        e.preventDefault();
        history.push('/recipes')
    }

    return (
        <div className={style.carddetails}>
            <button onClick={onBack} className={style.onBack}>Volver</button>
            <div className={style.card}>
                <div className={style.mainInfo}>
                    <div>
                        <h1>{name[0].toUpperCase() + name.substr(1)}</h1>

                        <h2>Health Score: {healthScore}</h2>

                        <div className={style.dietsConteiner}>
                            {diets.map((diet, i) => <span key={i}>{diet}</span>)}
                        </div>

                        <div className={style.summary}>
                            <h3>Resumen</h3>
                            <span dangerouslySetInnerHTML={{ __html: summary }}></span>
                        </div>
                    </div>
                    <img className={style} src={image} alt={`${id}`} />
                </div>
                {
                    (Object.entries(steps).length) ?
                        <div className={style.steps}>{Object.entries(steps).map(([key, value]) => <span key={key}>{key}: {value}</span>)}</div>
                        : null
                }
            </div>
        </div>
    )
}