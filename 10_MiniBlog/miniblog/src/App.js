import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//HOOKS
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//CONTEXT
import { AuthProvider } from './context/AuthContext';

// PAGES
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

// COMPONENTS
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';



function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
 
  const loadingUser = user === undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    });
  },[auth]);

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user, setUser}}>
        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/> } />
              <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>} />
              <Route path="/posts/create" element={user ? <CreatePost/> : <Navigate to="/"/>} />
              <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/"/>} />
            </Routes>
          </div>
          <Fotter />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
