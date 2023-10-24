import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

function App() {
  const name = "Maju"
  const idade = 16
  const url = 'https://via.placeholder.com/150'

  return (

    <div className="App">
      
      <h1>Olá mundo</h1>
      <p>Meu primeiro React, meu nome é {name}</p>
      <img src={url} alt="Imagem" />
      <HelloWorld />
      <SayMyName name="Guilherme" idade="19" />
      <SayMyName name={name} idade={idade} />

    </div>

  );

}

export default App;
