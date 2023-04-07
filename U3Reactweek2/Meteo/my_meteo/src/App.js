
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbarre from "./components/Navbarre"
import Detailpage from "./components/Detailpage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbarre />
      </header>
      <Detailpage />
     
    </div>
  );
}

export default App;
