import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Albump from './components/Albump.jsx';
import './App.css';
import Artistp from './components/Artistp';
import { Underbar } from './components/Underbar';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
  <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
    <Route path='/' element={<Home />} /> 
    <Route path='/album/:id' element={<Albump />}/>
    <Route path='/artist/:id' element={<Artistp />}/>
      </Routes>
      
    <Underbar></Underbar>
 </BrowserRouter>
  );
}

export default App;
