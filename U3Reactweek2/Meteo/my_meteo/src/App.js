
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbarre from "./components/Navbarre"
import Footerr from './components/Footerr';
import Detailpage from "./components/Detailpage"
import Homepage from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
    <Navbarre />
    <BrowserRouter >
        <Routes>
            <Route path="/" element={<Homepage/> } />
            <Route path="/Detailpage/:cityID" element={<Detailpage/> } />

        </Routes>
    </BrowserRouter>
 <Footerr />
 </div>
  );
}

export default App;
