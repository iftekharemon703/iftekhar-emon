import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
  );
}

export default App;
