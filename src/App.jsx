import React from 'react';
import PasswordGenerator from './Components/generator-passw';
import './Components/Generator-passw.css'


const App = () => {
  return (
    <div>
      <h1>Generador de Contraseñas aleatorias</h1>
      <PasswordGenerator />
    </div>
  );
};

export default App;
