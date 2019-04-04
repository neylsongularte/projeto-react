import React, {Component} from 'react';
import CursosFormulario from '../../components/Cursos/Formulario/Formulario'
import { Link } from 'react-router-dom'


export default class ScreenCursosFormulario extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Link to="/cursos" className="btn btn-primary">&lt; Voltar</Link>

                        <h1 className="mt-4 mb-2">Cadastrar Curso</h1>

                        <CursosFormulario onCursoCadastrado={() => this.props.history.push('/cursos')} />
                    </div>
                </div>
            </div>
        )
    }
}
