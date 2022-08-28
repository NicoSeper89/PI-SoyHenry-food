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

    const [validation, setValidation] = useState({
        nameValidation: false,
        imageValidation: false,
        healthScoreValidation: false,
        summaryValidation: false
    });

    // const [enabledSubmit, setEnabledSubmit] = useState(false);

    const changeHandler = (e) => {

        setInfoForm({
            ...infoForm,
            [e.target.name]: e.target.value
        })

        if (e.target.name === "healthScore") {

            setValidation({
                ...validation,
                healthScoreValidation: (e.target.value < 0 || e.target.value > 100) ? false : true
            })

        } else if (e.target.name === "image") {

            setValidation({
                ...validation,
                imageValidation: (/^\s+\s*/.test(e.target.value) || e.target.value === "") ? false : true
            })

        } else {

            setValidation({
                ...validation,
                [`${e.target.name}Validation`]: (/^\s+\s*/.test(e.target.value) || e.target.value === "") ? false : true
            })
        }

    }

    const addStep = (step) => {

        const newSteps = { ...infoForm.steps, [`${Object.keys(infoForm.steps).length + 1}`]: step }

        setInfoForm({
            ...infoForm,
            steps: newSteps
        })

    }

    const deleteStep = () => {

        const copyArr = Object.entries(infoForm.steps);
        const newSteps = {};

        copyArr.forEach(([key, value]) => (parseInt(key) === (copyArr.length)) ? null : newSteps[key] = value)

        setInfoForm({
            ...infoForm,
            steps: newSteps
        })

    }

    const resetStep = () => {

        setInfoForm({
            ...infoForm,
            steps: {}
        })

    }

    function formSubmit(e) {

        e.preventDefault();
        console.log(infoForm);

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
                        changeHandler={changeHandler}
                        validation={validation}/>

                    <ChooseDiets />
                </div>

                <Steps currentSteps={Object.entries(infoForm.steps)}
                    addStep={addStep}
                    deleteStep={deleteStep}
                    resetStep={resetStep} />

                <input value="Enviar" type="submit" />
            </form>
        </div>

    )
}

export default Create;