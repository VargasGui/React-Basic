import './App.css';
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
      
      

    </div>

  );

}

export default App;
