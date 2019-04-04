

function DataFormatada(props) {
    if(props.data) {
        const dataFormatada = props.data.split('-').reverse().join('/');

        return dataFormatada;
    }

    return '';
}


export default DataFormatada;
