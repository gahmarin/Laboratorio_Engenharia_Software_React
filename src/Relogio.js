import { useState, useEffect } from 'react';
import './Relogio.css';


export default function Relogio() {
  const [horario, setHorario] = useState('');

  useEffect(() => {
    function atualizarRelogio() {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');

      const horarioFormatado = `${horas}:${minutos}:${segundos}`;
      setHorario(horarioFormatado);
    }

    atualizarRelogio(); 
    const intervalo = setInterval(atualizarRelogio, 1000); 

    
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="relogio-container">
      <h1>Relógio</h1>
      <h2 id="relogio">{horario}</h2>
    </div>
  );
}
