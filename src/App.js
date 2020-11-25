import { Component } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder!" icon="fab fa-github" />
        <Users />
        <h1>Hello, from your React app</h1>
      </div>
    );
  }
}

export default App;
