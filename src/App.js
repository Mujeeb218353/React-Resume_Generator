import './App.css';
import Home from "./components/Home";
import Form from "./components/form";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {useState} from "react";
function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }else{
      setMode('dark');
      document.body.style.background = 'linear-gradient(to right, #0f2027, #203a43, #2c5364)';
      document.body.style.color = 'white';
    }
  }
  return (
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/form" element={<Form mode={mode}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
