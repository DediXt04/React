import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstComponent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    
    <div className="App">
      <h1>Meu primeiro componente</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
