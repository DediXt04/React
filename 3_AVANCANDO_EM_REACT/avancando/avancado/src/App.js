import { useState } from 'react';
import './App.css';
import CondicionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import MyFragment from './components/MyFragment';
import ExecuteFunc from './components/ExecuteFunc';

function App() {
  //const name = "jajajajaj";

  const cars = [
    { id: 1, brand: "Fusca", km: 10000, color: "azul", newCar: false },
    { id: 2, brand: "Civic", km: 500, color: "preto", newCar: true },
    { id: 3, brand: "Palio", km: 0, color: "branco", newCar: true },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

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
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      <MyFragment  propFragment="Terceiro título"/>

      <ExecuteFunc myFunc={showMessage}/>

    
     
    
    </div>
  );
}

export default App;
