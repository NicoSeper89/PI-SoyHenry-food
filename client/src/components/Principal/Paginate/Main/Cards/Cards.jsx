import React from "react";
import { connect } from 'react-redux';
import Card from './Card.jsx';

const Cards = ({allRecipes, page}) => {
    
    return (
        <div>
        {
          allRecipes.slice((page - 1)*9, page*9 )

                    .map((recipe) => (<Card key={recipe.id}
                                            id={recipe.id} 
                                            name={recipe.name}
                                            image={recipe.image}
                                            diets={recipe.diets}
                                            />))
        }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        allRecipes: state.allRecipes,
        page: state.page
    }
}

export default connect(mapStateToProps, null)(Cards);