import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar/Navbar";
import User from "./components/Users/User";
import Home from "./components/Pages/Home";
import Alert from "./components/Layout/Alert/Alert";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";

import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";

import "./App.css";

const App = () => {
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
  </GithubState>;
};

export default App;
