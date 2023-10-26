import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Frase from './components/Frase'
import List from './components/List'


function App() {
  const name = "Guilherme"
  const url = 'https://via.placeholder.com/150'

  return (

    <div className="App">
      
      <h1>Olá mundo</h1>
      <p>Meu primeiro React, meu nome é {name}</p>
      <img src={url} alt="Imagem" />
      <Frase/>
      <List/>
      <Form/>
      <Evento/>
    </div>

  );

}

export default App;
