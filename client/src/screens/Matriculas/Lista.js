import React from 'react';
import { Link } from 'react-router-dom'
import MatriculasLista from '../../components/Matriculas/Lista/Lista'



function ScreenMatriculasLista(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Link to="/" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                    <h1>Matrículas</h1>
                    <MatriculasLista />
                </div>
            </div>
        </div>
    )
}

export default ScreenMatriculasLista;
