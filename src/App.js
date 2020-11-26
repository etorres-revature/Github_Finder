import { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/layout/Alert/Alert";
import About from "./components/Pages/About";
import GithubState from "./Context/Github/GithubState";
import "./App.css";

const App = (props) => {
  const [alert, setAlert] = useState(null);

  // show new alert for search button validation
  const newAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3500);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="GitHub Finder!" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search newAlert={newAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
