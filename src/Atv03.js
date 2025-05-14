import React from 'react';
import Gallery, {Profile} from './Gallery';
import {Link} from 'react-router-dom';

export default function Atv03() {
    return (
    <>
        <h1>Atividade 3</h1>
        <Gallery />
        
        <Link to="/">retornar a página inicial</Link>
    </>
    );
}



