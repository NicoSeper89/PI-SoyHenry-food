import React, { Component } from "react";
import { connect } from "react-redux";
import style from './Side.module.css';
import {order} from '../../../../redux/actions';

class Side extends Component {

   /*  constructor(props) {
        super(props);
        this.state = {

        }
    } */

    render() {

        const {dispatch, allDiets} = this.props;

        return (
            <div className={style.side}>
                <div>
                    <button onClick={(e) => dispatch(order({typeOrder: "name", asc: true}))}>AZ</button>
                    <button onClick={(e) => dispatch(order({typeOrder: "name", asc: false}))}>ZA</button>
                </div>
                <div>
                    <button onClick={(e) => dispatch(order({typeOrder: "healthScore", asc: true}))}>+ Points</button>
                    <button onClick={(e) => dispatch(order({typeOrder: "healthScore", asc: false}))}>- Points</button>
                </div>
                <div className={style.diets}>
                    {allDiets.map((diet)=> (<label key={diet.id}>
                                                <input type="checkbox" value={diet.name} /> {diet.name}   
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

