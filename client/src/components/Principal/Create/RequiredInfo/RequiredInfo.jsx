import React, { Component } from "react";
import style from './RequiredInfo.module.css';

class RequiredInfo extends Component {
    
    render() {

        const { name, image, healthScore, summary, changeHandler, validation } = this.props

        return (
            <div className={style.requiredInfo}>
                <h3>Datos requeridos</h3>
                <label>Nombre*
                    <input name={"name"}
                        value={name}
                        onChange={changeHandler}
                        type="text"
                        autoComplete="off" />
                </label>

                <label>Imagen*
                    <input name={"image"}
                        value={image}
                        onChange={changeHandler}
                        type="text"
                        autoComplete="off" />
                </label>

                <label>Health Score*
                    <input name={"healthScore"}
                        value={healthScore}
                        onChange={changeHandler}
                        type="number"
                        autoComplete="off" />
                </label>

                <label>Descripcion*
                    <textarea name={"summary"}
                        value={summary}
                        onChange={changeHandler}
                        type="text"
                        autoComplete="off" />
                </label>
            </div>
        )
    }


}


export default RequiredInfo