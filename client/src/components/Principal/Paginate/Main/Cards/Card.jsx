import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import style from './Card.module.css';
import {getRecipesBackend} from '../../../../../redux/actions.js'

class Card extends Component {

    delete = async (e) => {
        e.preventDefault();

        const sureToDeleted = window.confirm("¿Seguro que quiere eliminar la receta?");
                
        if (sureToDeleted) { 

            const res = await axios.delete(`/recipes/${this.props.id}`)

            if (res.status === 500) return window.alert("no se pudo eliminar la receta");
    
            this.props.dispatch(getRecipesBackend())}

    }

    render() {

        const { name, image, healthScore, id, diets } = this.props;

        return (
            <NavLink to={`/recipes/${id}`}>
                <div className={style.card}>
                    {(!id.toString().includes("-"))?
                                                    null:
                                                    <button className={style.delete}
                                                            onClick={this.delete}>X</button>}
                    <div className={style.nameRecipe} ><h2>{name[0].toUpperCase() + name.substr(1)}</h2></div>
                    <img src={image} alt={`${id}Img`} />
                    <div className={style.scoreConteiner} ><h3 >{`Health Score: ${healthScore}`}</h3></div>
                    <div className={style.dietsConteiner}>
                        {diets.map((diet, i) => <span key={diet}>{diet}</span>)}
                    </div>
                </div>
            </NavLink>
        )
    }
}

export default connect(null,null)(Card);