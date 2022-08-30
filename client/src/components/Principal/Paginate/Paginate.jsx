import React, {Component} from "react";
import Side from './Side/Side.jsx';
import Main from './Main/Main.jsx';
import style from './Paginate.module.css';

class Paginate extends Component {

    render(){

        return(
        <div className={style.paginate}>
            <Side/>
            <Main/>
        </div>
        )
    }
}


export default Paginate;