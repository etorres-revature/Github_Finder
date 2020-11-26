import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import User from "./Components/Users/User";
import Home from "./Components/Pages/Home";
import Alert from "./Components/Layout/Alert/Alert";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";

import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="GitHub Finder!" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
