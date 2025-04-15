import React, { useState, useEffect } from 'react';
import './Letreiro.css';

export default function Letreiro() {
  const [texto, setTexto] = useState('');
  const mensagem = 'Conheça a FATEC';
  const velocidade = 200; 

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTexto(mensagem.slice(0, index + 1));
      index++;

      
      if (index > mensagem.length) {
        setTimeout(() => {
          index = 0;
          setTexto('');
        }, 2000); 
      }
    }, velocidade);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="letreiro-container">
      <h1>{texto}</h1>
    </div>
  );
}
