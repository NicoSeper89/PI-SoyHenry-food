import React, { useEffect, useState } from "react";
import fetch from "node-fetch";
import CardDetails from "./CardDetails";
import style from './Details.module.css';

const Details = ({id}) => {

    const [recipe, setRecipe] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        
        fetch(`http://localhost:3001/recipes/${id}`)
        .then(response => response.json())
        .then(data => setRecipe(data))
        .catch(() => setError(true))

      }, [id])

    return (
        <div className={style.detailsConteiner}>
            {
              (error)? <>ERRORR</> : (Object.entries(recipe).length)? <CardDetails recipe={recipe}/> : <>NO CARGOO</>
            }
        </div>
    )
    
}

export default Details;