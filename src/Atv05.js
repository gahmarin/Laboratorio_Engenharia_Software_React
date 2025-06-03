import React from 'react';
import ComponentsAtv05 from './ComponentsAtv05';
import {Link} from 'react-router-dom';

export default function Atv05() {
    return (
    <>
        <h1>Atividade 5</h1>
        <ComponentsAtv05 />
        
        <Link to="/">retornar a página inicial</Link>
    </>
    );
}