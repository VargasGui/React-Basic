import PropTypes from 'prop-types'

function CarrosLista ({nome, modelo, ano}) {
    return (
        <>
            <li>Nome: {nome} - Modelo: {modelo} - Ano: {ano}</li>
        </>
    )
}

CarrosLista.propTypes = {
    nome: PropTypes.string.isRequired,
    modelo: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired
}
CarrosLista.defaultProps = {
    nome: "Name is required",
    modelo: "Model is required",
    ano: "Year is required"
}

export default CarrosLista