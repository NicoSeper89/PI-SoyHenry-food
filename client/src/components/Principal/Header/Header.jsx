import React, { Component } from "react";
import {connect} from "react-redux";
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { getRecipesByName,resetRecipes } from "../../../redux/actions";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        }
    }

    changeHandler = (e) => {
        this.setState({...this.state,
                        inputValue: e.target.value})
    }

    searchSubmit = (e) => {

        e.preventDefault();

        if (!!this.state.inputValue) {

            this.props.getRecipesByName(this.state.inputValue);
 
            this.props.history.push('/recipes')                                 

        }
        
    }

    returnRecipes = (e) => {

        e.preventDefault();

        this.props.history.push('/');

        this.props.resetRecipes()

    }
    
    render() {

        console.log(this.props.location)
        
        return (
            <div className={style.header}>

                
                <img onClick={this.returnRecipes} className={style.logo} src="https://i.postimg.cc/QMJG1fzd/logohenryfoods.png" alt="logo" />
                
                {(this.props.location.pathname === "/recipes/create")? <div>asdklasld</div>
                :
               (<div className={style.inputsContainer}>
                    <NavLink style={{textDecoration: 'none'}} to="/recipes/create">
                        <button className={style.buttonCreate}>Crear Receta</button>
                    </NavLink>
                    <form onSubmit={this.searchSubmit} className={style.search}>
                        <input type="text" value={this.state.inputValue} onChange={this.changeHandler}/>
                        <input className={style.buttonCreate} value={"Buscar"} type="submit" />
                    </form>
                </div>)}

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRecipesByName: (name) => dispatch(getRecipesByName(name)),
    resetRecipes: () => dispatch(resetRecipes())
  })

export default connect(null, mapDispatchToProps)(Header);