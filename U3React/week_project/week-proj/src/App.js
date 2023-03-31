import Navbarre from "./components/Navbarre" 
import './App.css';
import FirstCarouselD from "./components/FirstCarousel";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbarre />
      </header>
      <div>
        <FirstCarousel />
      </div>
    </div>
  );
}

export default App;
