import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Albump from './components/Albump';
import './App.css';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/album/' element={<Albump/>}/>
      </Routes>
      
    </div>
 </BrowserRouter>
  );
}

export default App;
