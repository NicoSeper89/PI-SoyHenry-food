import React, { Component } from "react";
import style from './Side.module.css';

class Side extends Component {

    render() {
        return (
            <div className={style.side}>
                <div>
                    <button>AZ</button>
                    <button>ZA</button>
                </div>
                <div>
                    <button>+ Points</button>
                    <button>- Points</button>
                </div>
                
            </div>
        )
    }
}

export default Side;