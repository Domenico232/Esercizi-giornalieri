import './App.css';
import Home from './components/Home'
import Navbarre from './components/Navbarre'
import Footerr from './components/Footerr';
import { Routes, Route,  BrowserRouter } from "react-router-dom"
import About from './components/About';
import Tvshows from './components/TvshowsP';
import Moviedetails from './components/Moviedetails';


function App() {
  return (

      <BrowserRouter >
        <div className="App">
      <Navbarre />
     	 <Routes>

         <Route path="/Moviedetails" element={<Moviedetails />} />
         <Route path="/" element={<Home />} />
         <Route path='/About' element={<About/>}/>
         <Route path='/TvshowsP' element={<Tvshows/>}/>
         <Route path='/Moviedetails/:MovieID' element={<Moviedetails/>}/>
       </Routes>
       <Footerr />
       </div>
     </BrowserRouter>



  

     
  );
}

export default App;