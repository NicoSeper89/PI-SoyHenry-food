import React, { useState } from "react";
import {useSelector} from 'react-redux';
import style from './Create.module.css';

const Create = () => {

    const [infoForm, setInfoForm] = useState({name: "",
                                            image: "",
                                            healthScore: 0,
                                            summary: ""
                                            });
    
    const allDiets = useSelector((state) => state.allDiets)
    // const [enabledSubmit, setEnabledSubmit] = useState(false);

    const changeHandler = (e) => {
        console.log(typeof parseInt(e.target.value))
        setInfoForm({ ...infoForm, 
                    [e.target.name]: e.target.value})
    }

    function formSubmit(e) {

        e.preventDefault();

        console.log(e);

    }

    return (
        <div className={style.createConteiner}>

            <h3>Crear una nueva receta</h3>

            <form className={style.form} onSubmit={formSubmit}>

                <label>Nombre*: <input name={"name"} 
                                        value={infoForm.name} 
                                        onChange={changeHandler} 
                                        type="text"
                                        autoComplete="off"/>
                </label>

                <label>Imagen*: <input name={"image"} 
                                        value={infoForm.image} 
                                        onChange={changeHandler} 
                                        type="text" 
                                        autoComplete="off"/>
                </label>

                <label>Health Score*: <input name={"healthScore"}  
                                             value={infoForm.healthScore} 
                                             onChange={changeHandler} 
                                             type="number" 
                                             autoComplete="off"/>
                </label>

                <label>Descripcion*: <input name={"summary"}  
                                            value={infoForm.summary} 
                                            onChange={changeHandler} 
                                            type="text" 
                                            autoComplete="off"/>
                </label>

                <div className={style.diets}>
                <span>Tipos de dietas</span>
                {
                 allDiets.map((diet) => (
                                        <label key={diet.id} >
                                            <input key={diet.id}
                                                type="checkbox"
                                                value={diet.name}
                                               /*  onChange={typesChangeHandler}
                                                disabled={(boxesDisabled && !(t.name === info.types[0] || t.name === info.types[1])) ? true : false} */
                                            />{diet.name}
                                        </label>))
                }
                </div>

                <div>
                    
                </div>

                <input value="Enviar" type="submit" />
                
            </form>


        </div>

    )

}

export default Create;