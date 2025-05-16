import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Informacoes from './pages/Informacoes';
import NotFound from './pages/NotFound';

//components
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <Router>
        <Navbar />

        <main>
          <Routes>
            {/* Usando a prop `element` corretamente */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/products/:id/informacoes" element={<Informacoes />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;