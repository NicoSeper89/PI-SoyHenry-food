import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import RequiredInfo from "./RequiredInfo/RequiredInfo";
import ChooseDiets from "./ChooseDiets/ChooseDiets";
import Steps from "./Steps/Steps";
import style from './Create.module.css';
import { getRecipesBackend } from "../../../redux/actions";

const Create = () => {

    const history = useHistory();
    const dispatch = useDispatch()

    const [infoForm, setInfoForm] = useState({
        name: "",
        image: "",
        healthScore: 0,
        summary: "",
        diets: [],
        steps: {}
    });

    const [validation, setValidation] = useState({
        nameValidation: false,
        imageValidation: true,
        healthScoreValidation: true,
        summaryValidation: false
    });

    const [enabledSubmit, setEnabledSubmit] = useState(false);
    const [newRecipe, setNewRecipe] = useState(false)

    useEffect(() => {

        const { nameValidation, imageValidation, healthScoreValidation, summaryValidation } = validation;

        return (nameValidation && imageValidation && healthScoreValidation && summaryValidation) ?
            setEnabledSubmit(true) :
            setEnabledSubmit(false);

    }, [setEnabledSubmit, validation]);

    const changeHandler = (e) => {

        setInfoForm({
            ...infoForm,
            [e.target.name]: (e.target.name !== "healthScore") ? e.target.value : parseInt(e.target.value)
        })

        if (e.target.name === "healthScore") {

            setValidation({
                ...validation,
                healthScoreValidation: (e.target.value < 0 || e.target.value > 100) ? false : true
            })

        } else if (e.target.name === "image") {

            setValidation({
                ...validation,
                imageValidation: (/^\s+\s*/.test(e.target.value)) ? false : true
            })

        } else {

            setValidation({
                ...validation,
                [`${e.target.name}Validation`]: (/^\s+\s*/.test(e.target.value) || e.target.value === "") ? false : true
            })
        }

    }

    const selectDiets = (e) => {

        if (e.target.checked === false) {
            setInfoForm({
                ...infoForm,
                diets: infoForm.diets.filter(type => type !== e.target.value)
            })
        } else {
            setInfoForm({
                ...infoForm,
                diets: [...infoForm.diets, e.target.value]
            });
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

    const resetStep = (e) => {
        console.log(e)
       return setInfoForm({
            ...infoForm,
            steps: {}
        })

    }

    const goBack = () => {

        newRecipe && dispatch(getRecipesBackend())

        history.push('/recipes')

    }

    async function formSubmit(e) {

        try {
            e.preventDefault();

            const res = await fetch('http://localhost:3001/recipes', {method: "POST",  
                                                                    body: JSON.stringify(infoForm),   
                                                                    headers: { "Content-type": "application/json; charset=UTF-8" }})

            if (res.status === 404){ 
                window.alert("error al crear receta! No repita el nombre de una receta ya creada y complete todos los campos requeridos")
            }
            else {
                const createAgain = window.confirm("¿Crear otra receta?");
                
                if (!createAgain) {dispatch(getRecipesBackend()); return history.push('/recipes');}  
                
                setNewRecipe(true)
                
                setInfoForm({name: "",
                            image: "",
                            healthScore: 0,
                            summary: "",
                            diets: [],
                            steps: {}
                        });
                    
                setValidation({...validation,
                                nameValidation: false,
                                summaryValidation: false});
            }


        } catch (err) {
            window.alert("error al conectar con el servidor! no se pudo crear la receta");
            newRecipe && dispatch(getRecipesBackend())
            history.push('/recipes');
        }

        

    }

    return (
        <div className={style.createConteiner}>

            <h2>CREAR RECETA</h2>

            <hr />

            <form className={style.form} onSubmit={formSubmit}>
                <div>

                    <RequiredInfo name={infoForm.name}
                        image={infoForm.image}
                        healthScore={infoForm.healthScore}
                        summary={infoForm.summary}
                        changeHandler={changeHandler}
                        validation={validation} />

                    <ChooseDiets selectDiets={selectDiets} />

                </div>

                <hr />

                <Steps currentSteps={Object.entries(infoForm.steps)}
                    addStep={addStep}
                    deleteStep={deleteStep}
                    resetStep={resetStep} />

                <input type="button" className={style.cancelButton} onClick={goBack} value="Volver" />
                <input type="submit" className={style.createButton} disabled={!enabledSubmit} value="Crear" />
            </form>
        </div>

    )
}

export default Create;