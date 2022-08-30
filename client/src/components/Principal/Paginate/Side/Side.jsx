import React, { Component } from "react";
import { connect } from "react-redux";
import style from './Side.module.css';
import { order, filterByDiets, resetRecipes } from '../../../../redux/actions';

class Side extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markedDiets: []
        }

        this.tickCheckbox = this.tickCheckbox.bind(this);
    }

    componentDidUpdate({dispatch}) {
        
        return (this.state.markedDiets.length !== 0)? 
                                dispatch(filterByDiets(this.state.markedDiets)) : 
                                dispatch(resetRecipes());

    }

    tickCheckbox(e) {

        if (e.target.checked) {

            this.setState(state => {
                return {
                    ...state,
                    markedDiets: [...state.markedDiets, e.target.value]
                }
            })

        } else {

            this.setState(state => {
                return {
                    ...state,
                    markedDiets: state.markedDiets.filter(diet => diet !== e.target.value)
                }
            })
        }
    }

    render() {

        const { dispatch, allDiets } = this.props;

        return (
            <div className={style.side}>
                <div className={style.orderConteiner}>
                    <button onClick={(e) => dispatch(order({ typeOrder: "string", asc: true, atribute: "name" }))}>AZ</button>
                    <button onClick={(e) => dispatch(order({ typeOrder: "string", asc: false, atribute: "name" }))}>ZA</button>
                </div>
                <div className={style.orderConteiner}>
                    <button onClick={(e) => dispatch(order({ typeOrder: "number", asc: true, atribute: "healthScore" }))}>+ Points</button>
                    <button onClick={(e) => dispatch(order({ typeOrder: "number", asc: false, atribute: "healthScore" }))}>- Points</button>
                </div>
                <div className={style.filterConteiner}>
                    {allDiets.map((diet) => (<label key={diet.id}>
                        <input type="checkbox" key={diet.id} value={diet.name} onChange={this.tickCheckbox} /> {diet.name}
                    </label>)
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allDiets: state.allDiets
})


export default connect(mapStateToProps, null)(Side);

