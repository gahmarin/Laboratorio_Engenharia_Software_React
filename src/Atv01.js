import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

export default function Atv01() {
    return (
    <>
        <h1>Atividade 1</h1>
        <Relogio />
        <Letreiro />
        <Link to="/">retornar a página inicial</Link>
    </>
    );
  }