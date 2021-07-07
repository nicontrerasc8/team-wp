import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HomeContainer from "./Containers/HomeContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeContainer/>
    </div>
  );
}

export default App;
