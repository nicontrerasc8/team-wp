import './App.css';
import NavBar from './Components/Navbar';
import HomeContainer from "./Containers/HomeContainer"
import Footer from "./Components/Footer"
import ScrollToTop from './ScrollToTop';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Admin from "./Admin"

function App() {
  console.log("He hecho la actualización")
  return (
    <Router>
      <NavBar/>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/">
          <HomeContainer/>
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
      </Switch>
      <Footer/>
      </Router>
  );
}

export default App;
