import React, { Component } from "react";
import style from './RequiredInfo.module.css';

class RequiredInfo extends Component {
    
    render() {

        const { name, image, healthScore, summary, changeHandler } = this.props

        const {nameValidation, healthScoreValidation, summaryValidation} = this.props.validation

        return (
            <div className={style.requiredInfo}>
                <h3>Datos principales</h3>

                <label >Nombre*
                    <input className={style[`dato${!nameValidation ? `Error` : ""}`]} 
                        name={"name"}
                        required
                        value={name}
                        onChange={changeHandler}
                        type="text"
                        autoComplete="off" />
                        {!nameValidation? <span className={style.textError}>Debe ingresar un nombre</span>:null}
                </label>

                <label >URL-Imagen
                    <input className={style.dato}
                        name={"image"}
                        value={image}
                        onChange={changeHandler}
                        type="text"
                        autoComplete="off" />
                </label>

                <label >Health Score*
                    <input className={style[`dato${!healthScoreValidation ? `Error` : ""}`]} 
                        name={"healthScore"}
                        value={healthScore}
                        onChange={changeHandler}
                        type="number"
                        autoComplete="off" />
                        {!healthScoreValidation? <span className={style.textError}>Min: 0 - Max: 100</span>:null}
                </label >

                <label >Descripcion*
                    <textarea  className={style[`dato${!summaryValidation ? `Error` : ""}`]}
                        name={"summary"}
                        value={summary}
                        onChange={changeHandler}
                        type="text"
                        autoComplete="off" />
                        {!summaryValidation? <span className={style.textError}>Debe ingresar una descripcion</span>:null}
                </label>
            </div>
        )
    }
}

export default RequiredInfo