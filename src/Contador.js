import React, { useState } from "react";
import "./Contador.css";

export default function Contador() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [total, setTotal] = useState(0);

  const incrementar = (tipo) => {
    if (tipo === "homem") {
      setHomens(homens + 1);
    } else {
      setMulheres(mulheres + 1);
    }
    setTotal(total + 1);
  };

  const decrementar = (tipo) => {
    if (tipo === "homem" && homens > 0) {
      setHomens(homens - 1);
      setTotal(total - 1);
    } else if (tipo === "mulher" && mulheres > 0) {
      setMulheres(mulheres - 1);
      setTotal(total - 1);
    }
  };

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
    setTotal(0);
  };

  return (
    <>
      
      

      <div className="contador-container">
        <h2 className="contador-titulo">Total</h2>
        <input
          type="text"
          className="contador-total"
          value={total}
          readOnly
        />

        <div className="contador-bloco">
          <img src="/homem.png" alt="Homens" />
          <span className="contador-label">Homens</span>
          <div className="contador-controles">
            <button className="contador-btn menos" onClick={() => decrementar("homem")}>-</button>
            <input type="text" className="contador-input" value={homens} readOnly />
            <button className="contador-btn mais" onClick={() => incrementar("homem")}>+</button>
          </div>
        </div>

        <div className="contador-bloco">
          <img src="/mulher.png" alt="Mulheres" />
          <span className="contador-label">Mulheres</span>
          <div className="contador-controles">
            <button className="contador-btn menos" onClick={() => decrementar("mulher")}>-</button>
            <input type="text" className="contador-input" value={mulheres} readOnly />
            <button className="contador-btn mais" onClick={() => incrementar("mulher")}>+</button>
          </div>
        </div>

        <button className="contador-reset" onClick={resetar}>
          <img src="/reset.png" alt="Resetar" />
        </button>
      </div>
    </>
  );
}
