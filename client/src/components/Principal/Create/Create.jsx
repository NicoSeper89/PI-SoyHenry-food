import React, { useState } from "react";

const Create = () => {

    const [infoForm/* , setInfoForm */] = useState({name: "",
                                              summary: "",
                                              image: "",
                                              healthScore: 0
                                            });

    // const [enabledSubmit, setEnabledSubmit] = useState(false);

    function formSubmit(e) {

        e.preventDefault();

        console.log(e);

    }

    return (
        <div >

            <h1>Crear una nueva receta</h1>

            <form onSubmit={formSubmit}>

                <label > Nombre*: <input value={infoForm.name}  type="text" /></label>

                <label > Imagen*: <input value={infoForm.image} type="text" /></label>

                <label > Descripcion*: <input value={infoForm.summary} type="text" /></label>

                <label > Health Score*: <input value={infoForm.healthScore} type="number" /></label>

                <input value="Enviar" type="submit" />

            </form>


        </div>

    )

}

export default Create;