import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

class Card extends Component {

    render() {

        const { name, image, healthScore, id, diets } = this.props;

        return (
            <NavLink to={`/recipes/${id}`}>
                <div className={style.card}>
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

export default Card;