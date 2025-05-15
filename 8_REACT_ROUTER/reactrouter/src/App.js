import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
