import React from "react";
import { useEffect } from "react";
import {useSelector} from 'react-redux';

const Buttons = () => {
    
    const {countRecipes} = useSelector((state) => state);

    useEffect(() => {

        for(let i = 1 ; i <= Math.ceil(countRecipes/9) ; i++ ) {
            // arrButton.push(<button>{i}</button>)
        }

    }, [countRecipes])


    const onClickButton = (e) => {
        e.preventDefault();
    
    }

    return (
        <>
          <button onClick={onClickButton}>{"<"}</button>
          <button onClick={onClickButton}>{">"}</button>
        </>
    )
}

export default Buttons