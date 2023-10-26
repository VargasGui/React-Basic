import { useState } from "react"

function Form() {
    function cadastrarUsuario (e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log("Cadastrado!")
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Cadastro Usuário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" placeholder="Insira um nome" id="nome" name="nome" onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" placeholder="Insira uma senha" id="senha" name="senha" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}


export default Form