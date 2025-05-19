import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

//Pages
import About from './pages/About';
import Products from './pages/Products';
import Page3 from './pages/Page3';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
