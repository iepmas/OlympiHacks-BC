import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/nav';
import People from './components/people';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="nav">
          <Navbar/>
        </header>
        <div className = "content">
          <Routes>
            <Route path="/people" element={<People />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
