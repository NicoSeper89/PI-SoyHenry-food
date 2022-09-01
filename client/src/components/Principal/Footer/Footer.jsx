import React, { Component } from "react";
import style from "./Footer.module.css";

class Footer extends Component {

    render() {
        return (
            <div className={style.footer}>

                <div className={style.infoLeft}>
                    <h5>Informacion</h5>
                    <span>Proyecto Individual soyHenry-Lab <br />
                        por Nicolas Sepertino <br />
                        nicosepertino@hotmail.com<br />
                        Rosario - Santa Fe (Arg)
                    </span>
                </div>
                <div className={style.infoRight}>
                    <a href="https://www.linkedin.com/in/nicolassepertino/">LINKEDIN<img src="https://i.postimg.cc/xThMr2PB/logo-Linkedin.png" alt="github" /></a>
                    <a href="https://github.com/NicoSeper89">GITHUB<img src="https://i.postimg.cc/Vs9NRcSz/logo-Git-Hub.png" alt="github" /></a>
                </div>


            </div>
        )
    }
}

export default Footer;
