
import './App.css';
import FirstCarousel from './components/FirstCarousel';
import Navbarre from './components/Navbarre'
import Footerr from './components/Footerr';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbarre />
      </header>
      <div><h1 className='d-inline pe-2'>TV Shows</h1><select className='bg-dark text-white'>
        <option>Genres</option>
        <option> Fantasy</option>
        <option>Science</option>
        <option>Romance</option>
        <option>Comic</option>
        </select></div>
      <div>
        <FirstCarousel Url="https://www.omdbapi.com/?i=tt3896198&apikey=d3e16d80&s=harry%20potter"/>
      </div>

      <div>
        <Footerr />
      </div>
    </div>
  );
}

export default App;
