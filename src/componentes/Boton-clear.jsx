import React from "react";
/* import '../hojas-de-estilo/Boton-clear.css'; */
import "../hojas-de-estilo/BotonClear.css";

// Botón que borra el contenido del input
const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.manejaraclear}>
        {props.children}
    </div>
);

export default BotonClear;