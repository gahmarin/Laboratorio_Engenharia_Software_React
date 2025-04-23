import React from 'react';
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
                </ul>
            </nav>
        </div>
    );
}
export default Home;