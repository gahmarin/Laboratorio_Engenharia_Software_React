import React from 'react';
import ComponentsAtv04 from './ComponentsAtv04';
import {Link} from 'react-router-dom';

export default function Atv03() {
    return (
    <>
        <h1>Atividade 4</h1>
        <ComponentsAtv04 />
        
        <Link to="/">retornar a página inicial</Link>
    </>
    );
}
