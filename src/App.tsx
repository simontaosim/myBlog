import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './components/pages/Home';
import Layout from './components/containers/Layout';

class App extends Component {
  render() {
    return (
     
        <Router>
           <Layout>
            <Route path="/" component={HomePage}/>
          </Layout>
        </Router>
      
    );
  }
}

export default App;
