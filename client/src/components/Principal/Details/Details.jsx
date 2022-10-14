import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import CardDetails from "./CardDetails";
import style from './Details.module.css';
import Loading from '../Loading/Loading.jsx';
import { useDispatch } from "react-redux";
import { getRecipesBackend } from "../../../redux/actions";

const Details = ({id}) => {

    const [recipe, setRecipe] = useState({});
    const [error, setError] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        
        window.scroll({
            top: 0,
            left: 0
          })

    })

    useEffect(() => {
        
        axios.get(`/recipes/${id}`)
        .then(response => setRecipe(response.data))
        .catch(() => setError(true))

      }, [id])

      const history = useHistory();

      const buttonOnBack = (e) => {
          e.preventDefault();
          history.push('/recipes')
      }

      const buttonDelete = async (e) => {
        e.preventDefault();

        const sureToDeleted = window.confirm("¿Seguro que quiere eliminar la receta?");
                
        if (sureToDeleted) { 

            const res = await axios.delete(`/recipes/${id}`)

            if (res.status === 500) return window.alert("no se pudo eliminar la receta");
    
            dispatch(getRecipesBackend())

            history.push('/recipes');}

    }

    return (
        <div className={style.detailsConteiner}>
            <button onClick={buttonOnBack} className={style.onBack}>{"<<<"}</button>
            {(!id.toString().includes("-"))?null:
            <button onClick={buttonDelete} className={style.delete}>{"Eliminar"}</button>}
            {
              (error)? <>ERRORR</> : (Object.entries(recipe).length)? <CardDetails recipe={recipe}/> : <Loading/>
            }
        </div>
    )
    
}

export default Details;