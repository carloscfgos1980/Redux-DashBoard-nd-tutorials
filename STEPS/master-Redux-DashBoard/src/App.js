import './App.css';
import Home from './Home';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SliceDicingData from './SliceDicingData';
import SingleStudent from './SingleStudent';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/SingleStudent">
              <SingleStudent />
            </Route>
            <Route path="/SliceDicingData">
              <SliceDicingData />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
