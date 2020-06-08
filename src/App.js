import React from 'react';
import './App.css';

// need to import new component
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainReactStateProps from './MainReactStateProps';
import AboutUs from './AboutUs';
import UserProfile from './UserProfile';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/user/:id" component={UserProfile} />
        <Route exact path="/" component={MainReactStateProps} />
      </Switch>


    </Router>
      
    );
}

export default App;
