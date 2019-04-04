import React from 'react';
import { Link } from 'react-router-dom'
import AlunosLista from '../../components/Alunos/Lista/Lista'



function ScreenAlunosLista(props) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Link to="/" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                    <h1>Alunos</h1>
                    <AlunosLista />
                </div>
            </div>
        </div>
    )
}

export default ScreenAlunosLista;
