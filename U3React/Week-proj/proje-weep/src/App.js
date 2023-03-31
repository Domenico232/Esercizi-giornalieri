
import './App.css';
import FirstCarousel from './components/FirstCarousel';
import SecondCarousel from './components/SecondCarousel';
import ThirdCarousel from './components/thirdCarousel';
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
        <FirstCarousel title='Serie del momento'/>
      </div>
      <div>
        <SecondCarousel title="Altri"/>
      </div>

      <div>
        <ThirdCarousel title="Per te"/>
      </div>

      <div>
        <Footerr />
      </div>
    </div>
  );
}

export default App;
