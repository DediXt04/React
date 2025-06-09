import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
