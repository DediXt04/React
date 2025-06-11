import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import EditProfile from './pages/EditProfile/EditProfile';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Hooks
import { useAuth } from './hooks/useAuth';



function App() {

  const { auth, loading } = useAuth();

  console.log(loading)

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={ auth ? <Home /> : <Navigate to="/login"/> } />
            <Route path="/profile" element={ auth ? <EditProfile /> : <Navigate to="/login"/> } />
            <Route path="/login" element={ !auth ? <Login /> : <Navigate to="/"/> } />
            <Route path="/register" element={ !auth ? <Register /> : <Navigate to="/"/> } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
