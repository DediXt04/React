import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components
import Navbar from './components/Navbar';

//Pages
import Page1 from './pages/Page1'; 
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
