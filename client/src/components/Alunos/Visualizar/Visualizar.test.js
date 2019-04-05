import React from 'react';
import ReactDOM from 'react-dom';
import AlunosVisualizar from './Visualizar';

it('renderiza sem quebrar', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AlunosVisualizar />, div);
    ReactDOM.unmountComponentAtNode(div);
});
