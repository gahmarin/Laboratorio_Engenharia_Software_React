import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () =>{
    return (
        <div className='home-container'>
            <h1>Página Inicial</h1>
            <nav className='home-nav'>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 4</Link>
                    </li>
                    <li>
                        <Link to="/Atv05">Atividade 5</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;