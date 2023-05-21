import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/nav';
import Home from './components/home';
import People from './components/people';
import AboutUs from './components/about-us';

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
            <Route path="/aboutus" element={<AboutUs />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
