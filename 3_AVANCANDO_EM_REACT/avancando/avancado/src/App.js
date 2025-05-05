import './App.css';
import CondicionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <div>
        <img src = "/shark.png" alt= "tubarao" />
      </div>
      <ManageData/>
      <ListRender/>
      <CondicionalRender/>
    </div>
  );
}

export default App;
