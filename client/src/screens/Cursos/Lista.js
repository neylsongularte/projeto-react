import React from 'react';
import { Link } from 'react-router-dom'
import CursosLista from '../../components/Cursos/Lista/Lista'



function ScreenCursosLista(props) {
    return <div className="container">
        <div className="row">
            <div className="col-sm">
                <Link to="/" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                <h1>Cursos</h1>
                <CursosLista />
            </div>
        </div>
    </div>
}

export default ScreenCursosLista;
