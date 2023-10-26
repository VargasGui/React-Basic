import Button from './Event/Button'

function Evento() {
    function eventOne () {
        console.log("Acionado o primeiro botão")
    }
    function eventTwo () {
        console.log("Acionado o segundo botão")
    }
    return (
        <div>
            <h1>Testando eventos part.2</h1>
            <Button event={eventOne} text="Primeiro Botão"/>
            <Button event={eventTwo} text="Segundo Botão"/>
        </div>
    )
}
export default Evento