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
                <label>
                    <input type="checkbox" id="cbox1" value="first_checkbox" checked={false}/> 
                </label>
                
            </div>
        )
    }
}

export default Side;