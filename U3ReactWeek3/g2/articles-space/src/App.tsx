import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Navbarre  from "./components/Navbarre";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cliccabile } from './components/Cliccabile';
function App() {
  return (<BrowserRouter>

    <div className="App">
      <header className="App-header">
          <Navbarre></Navbarre>
      </header>
      <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/article/:Eventid' element={<Cliccabile />} />

      </Routes>

    </div>
  
  </BrowserRouter>);
}

export default App;
