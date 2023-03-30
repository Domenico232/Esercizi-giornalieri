
import './App.css';
import  Navbarre  from "./components/Navbarre";
import fantasy from "./fantasy.json";
import Searchbar from "./components/Searchbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbarre />
      </header>
        <Searchbar data={fantasy}/>
       
    </div>
  );
  
}
console.log(fantasy)
export default App;
