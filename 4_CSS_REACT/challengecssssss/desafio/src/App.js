import './App.css';
import Car from './components/Car';

function App() {
  const cars = [
    {name: "Fusca", km: 10000, color:"azul"},
    {name: "Civic", km: 20000, color:"preto"},
    {name: "HB20", km: 0, color:"cinza"}
  ];

  return (
    <div className="App">
      <h1>Show room</h1>
      <div className="car_container">
        {cars.map((car) => (
          <Car car={car}/>
        ))}

      </div>
      
    </div>
  );
}

export default App;
