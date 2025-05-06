import { useState } from 'react';
import './App.css';
import CondicionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "jajajajaj";

  const [userName] = useState("heheh");

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <div>
        <img src = "/shark.png" alt= "tubarao" />
      </div>
      <ManageData/>
      <ListRender/>
      <CondicionalRender/>
      <ShowUserName name={userName}/>
      <CarDetails brand="Fusca" km={10000} color="azul"/>
      <CarDetails brand="Civic" km={20000} color="preto"/>
    </div>
  );
}

export default App;
