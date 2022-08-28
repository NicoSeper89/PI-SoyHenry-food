import React, { useState } from "react";
import RequiredInfo from "./RequiredInfo/RequiredInfo";
import ChooseDiets from "./ChooseDiets/ChooseDiets";
import Steps from "./Steps/Steps";
import style from './Create.module.css';

const Create = () => {

    const [infoForm, setInfoForm] = useState({
        name: "",
        image: "",
        healthScore: 0,
        summary: "",
        steps: {}
    });


    // const [enabledSubmit, setEnabledSubmit] = useState(false);

    const changeHandler = (e) => {

        setInfoForm({
            ...infoForm,
            [e.target.name]: e.target.value
        })
    }

    const addStep = (e, step) => {
        
        const newSteps = {...infoForm.steps, [`${Object.keys(infoForm.steps).length + 1}`]: step} 

        setInfoForm({
            ...infoForm,
            steps: newSteps
        })

    }

    const deleteStep = (e, step) => {
        
        

    }

    function formSubmit(e) {

        e.preventDefault();

        console.log(e);

    }

    return (
        <div className={style.createConteiner}>

            <h2>Crear una nueva receta</h2>

            <form className={style.form} onSubmit={formSubmit}>
                <div>
                    <RequiredInfo name={infoForm.name}
                        image={infoForm.image}
                        healthScore={infoForm.healthScore}
                        summary={infoForm.summary}
                        changeHandler={changeHandler} />

                    <ChooseDiets />
                </div>

                <Steps  currentSteps={Object.entries(infoForm.steps)}
                        addStep={addStep}
                        deleteStep={deleteStep}  />

                <input value="Enviar" type="submit" />
            </form>
        </div>

    )

}

export default Create;