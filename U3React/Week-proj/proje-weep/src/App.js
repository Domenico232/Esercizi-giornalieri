
import './App.css';
import FirstCarousel from './components/FirstCarousel';
import Searchbarre from './components/Searchbarre';
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
          <Searchbarre />
        </div>
      <div>
        <FirstCarousel title='Serie del momento' APIFilms="https://www.omdbapi.com/?i=tt3896198&apikey=d3e16d80&s=harry%20potter"/>
      </div>
      <div>
        <FirstCarousel title='Altri' APIFilms="https://www.omdbapi.com/?i=tt3896198&apikey=d3e16d80&s=lord%20rings"/>
      </div>
      <div>
        <FirstCarousel title='Per Te' APIFilms="https://www.omdbapi.com/?i=tt3896198&apikey=d3e16d80&s=fast%20furious"/>
      </div>
     

      <div>
        <Footerr />
      </div>
    </div>
  );
}

export default App;
