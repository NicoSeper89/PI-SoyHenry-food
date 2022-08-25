import React from "react";
import { connect } from 'react-redux';
import Card from './Card.jsx';
import style from './Cards.module.css';

const Cards = ({allRecipes, page}) => {
    
    return (
        <div className={style.cards}>
        {
          allRecipes.slice((page - 1)*9, page*9 )

                    .map((recipe) => (<Card key={recipe.id}
                                            id={recipe.id} 
                                            name={recipe.name}
                                            image={recipe.image}
                                            healthScore={recipe.healthScore}
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