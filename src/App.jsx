import "./App.css";
import Logo from "./imagenes/Logo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla.jsx";
import BotonClear from "./componentes/Boton-clear.jsx";
import { useState } from "react"; /* Importar useState un Hook */
import { evaluate } from "mathjs"; /* Importar evaluate es una libreria externa */

function App() {
  const [input, setInput] =
    useState(
      ""
    ); /* useState es un Hook que nos permite crear estados de estado en React. */
  const recibirInput = (valor) => {
    setInput(input + valor);
  }; /* Funcion que nos permite capturar el evento del Inpur*/

  const calcular = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos -_-");
    }
  };


  const handleInput = (char) => {
    let simbolo = char;

    if(simbolo === "=") {
      setInput(evaluate(input));
    }

    if(!isNaN(parseInt(char)) || simbolo === "." || simbolo === "-" || simbolo === "+" || simbolo === "*" || simbolo === "/") {
      console.log(char)
      setInput(input + char);
    }
  };
  /* handleInput permite manejar los elementos entrados por teclado en la pantalla de la calculadora */

  return (
    <div className="App">
      <div className="Logo-contenedor">
        <img src={Logo} className="Un-logo" alt="Logo elegido"></img>
        <div className="contenedor-titulo">
          <h1>CALCULADORA</h1>
          <h1>NEON</h1>
        </div>
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} handleInput={handleInput} />
        <div className="fila">
          <Boton darClick={recibirInput}>1</Boton>
          <Boton darClick={recibirInput}>2</Boton>
          <Boton darClick={recibirInput}>3</Boton>
          <Boton darClick={recibirInput}>+</Boton>
        </div>

        <div className="fila">
          <Boton darClick={recibirInput}>4</Boton>
          <Boton darClick={recibirInput}>5</Boton>
          <Boton darClick={recibirInput}>6</Boton>
          <Boton darClick={recibirInput}>-</Boton>
        </div>

        <div className="fila">
          <Boton darClick={recibirInput}>7</Boton>
          <Boton darClick={recibirInput}>8</Boton>
          <Boton darClick={recibirInput}>9</Boton>
          <Boton darClick={recibirInput}>*</Boton>
        </div>

        <div className="fila">
          <Boton darClick={calcular}>=</Boton>
          <Boton darClick={recibirInput}>0</Boton>
          <Boton darClick={recibirInput}>.</Boton>
          <Boton darClick={recibirInput}>/</Boton>
        </div>

        <div className="fila">
          <BotonClear manejaraclear={() => setInput("")}>Clear</BotonClear>{" "}
          {/* manejaraclear es un evento y lo pasa a la funcion */}
        </div>
      </div>
    </div>
  );
}

export default App;
