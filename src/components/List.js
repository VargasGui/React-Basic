import CarrosLista from './CarrosLista'

function List() {
    return (
        <div className="">
            <h1>Lista de Carros</h1>
            <ul>
            <CarrosLista nome="Fusca" modelo="Volkswagen" ano={1978} />
            <CarrosLista nome="Gol" modelo="Volkswagen" ano={1998} />
            <CarrosLista nome="Celta" modelo="Chevrolet" ano={2004} />
            <CarrosLista nome="Palio" modelo="Fiat" ano={2008} />
            </ul>

        </div>
    )
}
export default List