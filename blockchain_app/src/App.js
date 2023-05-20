import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/nav';
import People from './Components/people';
import Home from './Components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <Navbar/>
        </header>
        <div className = "content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/people" element={<People />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
