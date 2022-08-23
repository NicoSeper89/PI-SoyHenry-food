import React, { Component } from "react";
import style from './Main.module.css';
import Buttons from './Buttons/Buttons.jsx';
import Cards from './Cards/Cards.jsx';

class Main extends Component {

    render() {
        return (
            <div className={style.main}>
                <Buttons />
                <Cards />
                <Buttons />
            </div>
        )
    }
}


export default Main;