import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import fetch from "node-fetch";
import CardDetails from "./CardDetails";
import style from './Details.module.css';
import Loading from '../Loading/Loading.jsx';

const Details = ({id}) => {

    const [recipe, setRecipe] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        
        fetch(`http://localhost:3001/recipes/${id}`)
        .then(response => response.json())
        .then(data => setRecipe(data))
        .catch(() => setError(true))

      }, [id])

      const history = useHistory();

      const onBack = (e) => {
          e.preventDefault();
          history.push('/recipes')
      }

    return (
        <div className={style.detailsConteiner}>
            <button onClick={onBack} className={style.onBack}>{"<<<"}</button>
            {
              (error)? <>ERRORR</> : (Object.entries(recipe).length)? <CardDetails recipe={recipe}/> : <Loading/>
            }
        </div>
    )
    
}

export default Details;