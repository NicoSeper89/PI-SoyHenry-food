import React, { Component } from "react";
import {connect} from "react-redux";
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { getRecipesByName } from "../../../redux/actions";

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

        (!!this.state.inputValue) && this.props.getRecipesByName(this.state.inputValue);
    }
    
    render() {
        
        return (
            <div className={style.header}>

                <NavLink to="/">
                    <img className={style.logo} src="https://i.postimg.cc/QMJG1fzd/logohenryfoods.png" alt="logo" />
                </NavLink>

                <div className={style.inputsContainer}>

                    <NavLink style={{textDecoration: 'none'}} to="/recipes/create">
                        <button className={style.buttonCreate}>Crear Receta</button>
                    </NavLink>

                    <form onSubmit={this.searchSubmit} className={style.search}>
                        <input type="text" value={this.state.inputValue} onChange={this.changeHandler}/>
                        <input className={style.buttonCreate} value={"Buscar"} type="submit" />
                    </form>

                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRecipesByName: (name) => dispatch(getRecipesByName(name))
  })

export default connect(null, mapDispatchToProps)(Header);