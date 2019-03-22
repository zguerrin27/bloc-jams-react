import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import logo from './components/assets/images/bloc_jams_logo.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="navbar fixed-top navbar-dark bg-dark">
          <nav className="headerNav">
            <Link to='/'>Landing</Link>
            <Link to='/Library'>Library</Link>
          </nav>
          <img className="logo" src={logo} alt="logo pic"/>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/Library" component={Library} />
          <Route path="/Album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;