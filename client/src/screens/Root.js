import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from '../assets/logo.svg';
import ScreenCursosLista from './Cursos/Lista';
import ScreenCursosFormulario from './Cursos/Formulario';
import ScreenCursosVisualizar from './Cursos/Visualizar';
import ScreenAlunosLista from './Alunos/Lista';
import ScreenAlunosFormulario from './Alunos/Formulario';
import ScreenAlunosVisualizar from './Alunos/Visualizar';
import ScreenMatriculasLista from './Matriculas/Lista';
import ScreenMatriculasFormulario from './Matriculas/Formulario';
import ScreenMatriculasVisualizar from './Matriculas/Visualizar';


function Index() {
  return <h2 className="text-center mt-5">Bem Vindo Sr. Jubilut!</h2>;
}

function AppRouter() {
  return (
    <Router>
        <div>
            <nav className="text-center">
                <img src={logo} className="logo" alt="" />

                <h3>Painel Administrativo</h3>

                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/" className="btn btn-primary">Início</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/cursos" className="btn btn-primary">Cursos</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/alunos" className="btn btn-primary">Alunos</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/matriculas" className="btn btn-primary">Matrículas</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/cursos" exact component={ScreenCursosLista} />
                <Route path="/cursos/create" exact component={ScreenCursosFormulario} />
                <Route path="/cursos/:id" exact component={ScreenCursosVisualizar} />
                <Route path="/cursos/:id/edit" component={ScreenCursosFormulario} />

                <Route path="/alunos" exact component={ScreenAlunosLista} />
                <Route path="/alunos/create" exact component={ScreenAlunosFormulario} />
                <Route path="/alunos/:id" exact component={ScreenAlunosVisualizar} />
                <Route path="/alunos/:id/edit" component={ScreenAlunosFormulario} />

                <Route path="/matriculas" exact component={ScreenMatriculasLista} />
                <Route path="/matriculas/create" exact component={ScreenMatriculasFormulario} />
                <Route path="/matriculas/:id" exact component={ScreenMatriculasVisualizar} />
                <Route path="/matriculas/:id/edit" component={ScreenMatriculasFormulario} />
            </Switch>
        </div>
    </Router>
  );
}

export default AppRouter;
