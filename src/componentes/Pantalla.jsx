import React from "react";
import "../hojas-de-estilo/Pantalla.css";

// Input que muestra el valor acctula del estado input y permite modificarlo
const Pantalla = ({ input, handleInput }) => (
  <input
    className="input"
    type="text"
    value={input}
    onInput={(evento) => handleInput(evento.nativeEvent.data)}
  />
);

export default Pantalla;
