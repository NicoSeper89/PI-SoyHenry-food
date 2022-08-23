import React from "react";
import { connect } from 'react-redux';
import Card from './Card.jsx';

const Cards = ({allRecipes}) => {
    
    return (
        <>
        {
          allRecipes.map((recipe) => (<Card key={recipe.id}
                                            id={recipe.id} 
                                            name={recipe.name}
                                            image={recipe.image}
                                            diets={recipe.diets}
                                            />))
        }
        </>
    )
}

function mapStateToProps(state) {
    return {
        allRecipes: state.allRecipes
    }
}

export default connect(mapStateToProps, null)(Cards);