import React, {Component} from "react";

class Card extends Component {

    render(){

        const {name, image/* , diets */} = this.props;

        return(
            <><img src={image} alt={name} /></>
        )
    }
}

export default Card;