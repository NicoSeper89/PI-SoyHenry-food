import React, { Component } from "react";
import { connect } from "react-redux";
import style from './Side.module.css';
import { order, filterByDiets, resetRecipes } from '../../../../redux/actions';

class Side extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markedDiets: [],
            nameOrder: {
                az: false,
                za: false,
            },
            healthScoreOrder: {
                mn: false,
                mx: false
            }
        }

        this.tickOrder = this.tickOrder.bind(this);
        this.tickCheckbox = this.tickCheckbox.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.markedDiets.length !== this.state.markedDiets.length){
        
           return (this.state.markedDiets.length !== 0)? 
                                this.props.dispatch(filterByDiets(this.state.markedDiets)) : 
                                this.props.dispatch(resetRecipes())
                            }
    }

    tickOrder(e, typeOrder, asc, atribute) {

        this.props.dispatch(order({ typeOrder, asc, atribute }));

        this.setState((state)=> ({...state, 
                                 [`${atribute}Order`]: { [e.target.value]: true 
        } }))

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

        this.setState((state)=> ({...state,
                                    nameOrder: {
                                        az: false,
                                        za: false,
                                    },
                                    healthScoreOrder: {
                                        mn: false,
                                        mx: false
                                    } }))
    }

    reset(e) {
        this.setState(state => ({markedDiets: [],
                                    nameOrder: {
                                        az: false,
                                        za: false,
                                },
                                    healthScoreOrder: {
                                        mn: false,
                                        mx: false
                                }}))

    return this.props.dispatch(resetRecipes())
        
    }

    render() {

        const { allDiets } = this.props;

        return (
            <div className={style.side}>
                <h2>Ordenar Recetas</h2>
                <div className={style.orderConteiner}>
                    <button value={"az"} 
                            disabled={this.state.nameOrder.az} 
                            onClick={(e) => this.tickOrder(e, "string", true, "name")}>A-Z</button>

                    <button value={"za"} 
                            disabled={this.state.nameOrder.za}  
                            onClick={(e) => this.tickOrder(e, "string", false, "name")}>Z-A</button>
                </div>

                <div className={style.orderConteiner}>
                    <button value={"mn"}
                            disabled={this.state.healthScoreOrder.mn}
                            onClick={(e) => this.tickOrder(e, "number", true, "healthScore")}>MIN HS</button>

                    <button value={"mx"}
                            disabled={this.state.healthScoreOrder.mx}
                            onClick={(e) => this.tickOrder(e, "number", false, "healthScore")}>MAX HS</button>
                </div>
                <hr className={style.line}/>
                <h2>Filtrar Por Dietas</h2>

                <div className={style.filterConteiner}>
                    {allDiets.map((diet) => (<label key={diet.id}>
                        <input type="checkbox" 
                                key={diet.id} 
                                value={diet.name} 
                                checked={this.state.markedDiets.includes(diet.name)} 
                                onChange={this.tickCheckbox} /> {diet.name}
                    </label>)
                    )}
                </div>

                <hr className={style.line}/>

                <button className={style.resetButton} onClick={this.reset}>Reiniciar</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allDiets: state.allDiets
})


export default connect(mapStateToProps, null)(Side);

