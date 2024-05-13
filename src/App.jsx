import './App.css';
import Boton from './components/Boton';
import BotonCleaner from './components/BotonCleaner';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import IdentificadorFreeCc from './components/IdentificadorFreeCc';


function App() {

const operaciones = ["+", "-", "*", "/"]
const [input, setInput] = useState('');
const handleInput = val => {

  // validar que no pueda usar dos operadores seguidos
  const ultimoCaracter = input.slice(-1);
  const esOperacion = operaciones.includes(ultimoCaracter);
  if (operaciones.includes(val)) {
    if (esOperacion) {
      setInput(input.slice(0, -1) + val);
    } else {
  setInput(input + val)
    }
  }else {
    setInput(input + val);
  }
};

const calcularResultado = () => {
  if(input) {
    
    setInput(evaluate(input))
  }else {
    alert("Por favor ingrese valores para realizar los calculos")
  }

}



  return (
    <div className='App'>
     <IdentificadorFreeCc/>

      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
         <Boton manejarClick={handleInput}>1</Boton>
         <Boton manejarClick={handleInput}>2</Boton>
         <Boton manejarClick={handleInput}>3</Boton>
         <Boton manejarClick={handleInput}>+</Boton>
        </div>
        <div className='fila'>
         <Boton manejarClick={handleInput}>4</Boton>
         <Boton manejarClick={handleInput}>5</Boton>
         <Boton manejarClick={handleInput}>6</Boton>
         <Boton manejarClick={handleInput}>-</Boton>

        </div>
        <div className='fila'>
         <Boton manejarClick={handleInput}>7</Boton>
         <Boton manejarClick={handleInput}>8</Boton>
         <Boton manejarClick={handleInput}>9</Boton>
         <Boton manejarClick={handleInput}>*</Boton>
        </div>
        <div className='fila'>
         <Boton manejarClick={calcularResultado}>=</Boton>
         <Boton manejarClick={handleInput}>0</Boton>
         <Boton manejarClick={handleInput}>.</Boton>
         <Boton manejarClick={handleInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonCleaner manejarClear={() => setInput('')}>Clear
          </BotonCleaner>
        </div>
      </div>
     
    </div>
  );
}

export default App;
