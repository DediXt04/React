import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <MyForm  user={{name:"Bolas", email: "bolas@bolas.bolas", bio: "mim de", role:"admin"  }}/>
    </div>
  );
}

export default App;
