import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

class Card extends Component {

    render() {

        const { name, image, healthScore, id, diets } = this.props;

        return (
            <NavLink to={`/recipes/${id}`}>
                <div className={style.card}>
                    <img src={image} alt={`${id}Img`} />
                    <h2 style={{ margin: 0 }}>{name}</h2>
                    <h3 style={{ margin: 0 }}>{healthScore}</h3>
                    <div className={style.dietsConteiner}>
                        {diets.map(diet => <span key={diet}>{diet}</span>)}
                    </div>
                </div>
            </NavLink>
        )
    }
}

export default Card;