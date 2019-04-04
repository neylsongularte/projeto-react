import React from 'react'
import { Link } from 'react-router-dom'
import AlunosVisualizar from '../../components/Alunos/Visualizar/Visualizar'


function ScreenAlunosLista(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <Link to="/alunos" className="btn btn-primary btn-sm mb-4">&lt; Voltar</Link>

                    <h1>Visualizar aluno</h1>
                    <hr/>

                    <AlunosVisualizar id={props.match.params.id} />
                </div>
            </div>
        </div>
    );
}

export default ScreenAlunosLista;
