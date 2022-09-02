import React from "react";
import { useSelector } from 'react-redux';
import style from './ChooseDiets.module.css';

export default function ChooseDiets({selectDiets, diets}) {

    const allDiets = useSelector((state) => state.allDiets);

    return (
        <div className={style.dietsConteiner}>
            <h3>Tipos de dietas</h3>
            <div className={style.diets}>
                {
                    allDiets.map((diet) => (
                        <label  key={diet.id} >
                            <input className={style.checkbox}  
                                checked={diets.includes(diet.name)}
                                key={diet.id}
                                type="checkbox"
                                value={diet.name}
                                onChange={selectDiets}
                            />{diet.name}
                        </label>))
                }
            </div>
        </div>
    )

}