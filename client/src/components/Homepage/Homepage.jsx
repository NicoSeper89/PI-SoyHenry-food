import React from 'react';
import style from './Homepage.module.css';
import { NavLink } from 'react-router-dom';


export default function Homepage() {
    return (
        <div className={style.background} >
            <div className={style.card}>
                <div>
                    
                </div>
                <div>
                    <img src="" alt="" />
                    <NavLink to="/">
                        <button>INGRESAR</button>
                    </NavLink>
                    <div className={style.socialDiv}>
                        <img src="https://camo.githubusercontent.com/47af702b114eb6806f25a372bbebab619da39b999538d33583d78da8256d86ee/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f736f6369616c2d6d656469612d616e642d6c6f676f732d31312f33322f4c6f676f5f4769746875622d3235362e706e67" alt="github" />
                        <a href="https://www.google.com">GIT</a>
                        <img src="https://camo.githubusercontent.com/8259f8997be914d7bdabf8b861378e6b8299ab579a1fffa8dd0ade9341c75d3b/68747470733a2f2f63646e342e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f636f6c6f7266756c2d6775616368652d736f6369616c2d6d656469612d6c6f676f732d312f3135392f736f6369616c2d6d656469615f6c696e6b6564696e2d3132382e706e67" alt="github" />
                        <a href="https://www.google.com">LINKEDIN</a>
                    </div>
                </div>
            </div>

        </div>
    )
}