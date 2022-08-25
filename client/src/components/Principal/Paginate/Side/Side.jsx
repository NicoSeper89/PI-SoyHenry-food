import React, { Component } from "react";
import { connect } from "react-redux";
import style from './Side.module.css';
import { order } from '../../../../redux/actions';

class Side extends Component {

    constructor(props) {
        super(props);

        this.state = {
            markedDiets: []
        }

        this.tickCheckbox = this.tickCheckbox.bind(this);
    }

    componentDidUpdate({dispatch}) {

       /*  return (this.state.markedDiets.length === 0)? dispatch() : dispatch(); */

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
                <div>
                    <button onClick={(e) => dispatch(order({ typeOrder: "name", asc: true }))}>AZ</button>
                    <button onClick={(e) => dispatch(order({ typeOrder: "name", asc: false }))}>ZA</button>
                </div>
                <div>
                    <button onClick={(e) => dispatch(order({ typeOrder: "healthScore", asc: true }))}>+ Points</button>
                    <button onClick={(e) => dispatch(order({ typeOrder: "healthScore", asc: false }))}>- Points</button>
                </div>
                <div className={style.diets}>
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

