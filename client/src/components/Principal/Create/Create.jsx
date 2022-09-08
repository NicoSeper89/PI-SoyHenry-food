import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import RequiredInfo from "./RequiredInfo/RequiredInfo";
import ChooseDiets from "./ChooseDiets/ChooseDiets";
import Steps from "./Steps/Steps";
import style from './Create.module.css';
import { getRecipesBackend, newRecipe, resetRecipes } from "../../../redux/actions";

const Create = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const newRecipeCreate = useSelector(state => state.newRecipeCreate); 

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
        healthScoreValidation: true,
        summaryValidation: false
    });

    const [enabledSubmit, setEnabledSubmit] = useState(false);
    /* const [newRecipe, setNewRecipe] = useState(false) */

    useEffect(() => {

        const { nameValidation, healthScoreValidation, summaryValidation } = validation;

        return (nameValidation && healthScoreValidation && summaryValidation) ?
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

        } else {

            setValidation({
                ...validation,
                [`${e.target.name}Validation`]: (/^\s*$/.test(e.target.value)) ? false : true
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
       return setInfoForm({
            ...infoForm,
            steps: {}
        })

    }

    const goBack = () => {

        (newRecipeCreate)? dispatch(getRecipesBackend()): dispatch(resetRecipes());

        history.push('/recipes')

    }

    const deleteStepByN = (n) => {

        const newSteps = {};
        
        Object.entries(infoForm.steps).forEach(([key, value]) => {
               
            if (key < n) {newSteps[key] = value}
            else if (key > n) {newSteps[key - 1] = value}
        
        })
        
        return setInfoForm({
            ...infoForm,
            steps: newSteps
        })

    }

    async function formSubmit(e) {

        try {
            e.preventDefault();

            const res = await axios.post('/recipes', {...infoForm, 
                                                        name: infoForm.name.trim(),
                                                        summary: infoForm.summary.trim()})

            if (res.status === 404){ 
                window.alert("error al crear receta! No repita el nombre de una receta ya creada y complete todos los campos requeridos")
            }
            else {
                const createAgain = window.confirm("¿Crear otra receta?");
                
                if (!createAgain) {dispatch(getRecipesBackend()); return history.push('/recipes');}  
                
                dispatch(newRecipe())
                
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
            newRecipeCreate && dispatch(getRecipesBackend())
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

                    <ChooseDiets selectDiets={selectDiets} diets={infoForm.diets} />

                </div>

                <hr />

                <Steps currentSteps={Object.entries(infoForm.steps)}
                    addStep={addStep}
                    deleteStep={deleteStep}
                    resetStep={resetStep} 
                    deleteStepByN={deleteStepByN}/>

                <input type="button" className={style.cancelButton} onClick={goBack} value="Volver" />
                <input type="submit" className={style.createButton} disabled={!enabledSubmit} value="Crear" />
            </form>
        </div>

    )
}

export default Create;