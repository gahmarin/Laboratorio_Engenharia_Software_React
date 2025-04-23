import Contador from "./Contador";
import { Link } from "react-router-dom";

export default function Atv02() {
    return (
    <>
        <h1>Atividade 2</h1>
        <Contador />
        <Link to="/">retornar a página inicial</Link>
    </>
    );
  }