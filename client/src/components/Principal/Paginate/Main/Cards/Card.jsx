import React, {Component} from "react";
import style from './Card.module.css';

class Card extends Component {

    render(){

        const {name, image, id, diets} = this.props;

        return(
            <div className={style.card}>
                <img src={image} alt={`${id}Img`} />
                <h3>{name}</h3>
                <div className={style.dietsConteiner}>
                    {diets.map(diet => <span key={diet}>{diet}</span>)}
                </div>
            </div>
        )
    }
}

export default Card;