
import './App.css';
import FirstCarousel from './components/FirstCarousel';
import Navbarre from './components/Navbarre'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbarre />
      </header>
      <div>
        <FirstCarousel></FirstCarousel>
      </div>
    </div>
  );
}

export default App;
