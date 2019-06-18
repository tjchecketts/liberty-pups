
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './components/Home';
import Site from './Site';
import ContactMe from './components/ContactMe';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={Site} />
          <Route exact path='/contact-me' component={ContactMe} />
          {/* <Route exact path='/contactme' component={ContactMe} />
          <Route exact path='/creative' component={Creative} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;