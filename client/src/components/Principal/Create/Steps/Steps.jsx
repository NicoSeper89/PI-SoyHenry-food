import React, { useState } from "react";
import style from './Steps.module.css';

export default function Steps(props) {

    const { currentSteps, addStep } = props;
    const [step, setStep] = useState("");
    const [error, setError] = useState(false);

    const changeHandler = (e) => {

        if (!/^\s+\s*/.test(e.target.value)) {

            setError(false)

        } else {

            setError(true)
        }

        setStep(e.target.value);
    }

    const pressAdd = (e) => {

        e.preventDefault();

        if (!error && step !== "") {

            addStep(e, step);
            setStep("");

        }
    }

    return (
        <div className={style.stepsConteiner}>
            <label >
                <h3>
                    Pasos {error ? <span className={style.textError}>(No puede comenzar con espacio) </span> : null}
                </h3>

                <textarea className={style[`textarea${error ? `Error` : ""}`]}
                    value={step}
                    onChange={changeHandler}
                    onKeyDown={e => (e.key === "Enter") ? pressAdd(e) : null}
                />
                <div>
                    <button >Reset</button>
                    <button >Borrar Ultima</button>
                    <button onClick={pressAdd}>Agregar</button>
                </div>

            </label>

            <div className={style.currentSteps}>
                <h3>Lista de pasos:</h3>
                <div >
                    {
                        
                    }
                    {
                        currentSteps[0]? currentSteps.map(([key, value]) => <span key={key}>{key + ": " + value}</span>):
                                         <span>No hay pasos</span>
                    }
                </div>
            </div>
        </div>
    )
}