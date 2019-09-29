import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import './App.css';
// import ParticleEffectButton from 'react-particle-effect-button';

class App extends Component {
  state = {
    isHome: false
  }
  showNavHandler = (link) => {
    if (link === '/') {
      this.setState({ isHome: false })
    } else {
      this.setState({ isHome: true })
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navigation isHome={this.state.isHome} />
        <Switch>
          {/* <Route exact path="/" render={() => <Intro />} /> */}
          <Route exact path="/" render={(props) => <Intro {...props} showNavHandler={this.showNavHandler} />} />
          <Route path="/SKILLS" render={(props) => <Skills {...props} showNavHandler={this.showNavHandler} />} />
          <Route path="/WORKS" render={(props) => <Works {...props} showNavHandler={this.showNavHandler} />} />
          <Route path="/CONTACTS" render={(props) => <Contacts {...props} showNavHandler={this.showNavHandler} />} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;