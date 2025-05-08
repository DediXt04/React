
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("AAA");
  const redTitle = false;
  return (
    <div className="App">
      <h1>React com css</h1>
      <MyComponent />
      <p>paragrafo main</p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>
        este elemento foi estilizado de forma inline
        </p>

      <h2 style={n<10 ? ({color: "purple"}) : ({color:"pink"})}>CSS dinamico</h2>
      <h2 style={n>10 ? ({color: "purple"}) : ({color:"pink"})}>CSS dinamico</h2>
      <h2 style={name === "AAA" ? ({color: "green", backgroundColor:"#000"}) : ({color:"pink"})}>Teste nome</h2>

      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica</h2>

      <h2>
        <Title />
      </h2>
    </div>
  );
}

export default App;
