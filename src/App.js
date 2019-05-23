import React, {Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {

  renderCustomerListContainer = () => <h1>Customers List Container</h1>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/customers" component={this.renderCustomerListContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
