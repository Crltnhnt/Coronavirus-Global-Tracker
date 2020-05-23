import React from 'react';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

function App() {

  return (
      <div>
        <Header />
        <Router>
          <Route exact path="/" render={(props) => <Home component={Home}/>}/>
          <Route path="/information" render={(props) => <About component={About}/>}/>
          <Route path="/dashboard" render={(props) => <Dashboard component={Dashboard}/>}/>
        </Router>
      </div>
  );
}

export default App;