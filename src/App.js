import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom'
import HomePage from './home/index.js';
import AboutPage from './about/index.js';
import ProductPage from './product/index.js';
import ActivityPage from './activity/index.js';
import ContactPage from './contact/index.js';
import ActivityDetailPage from './activityDetail/index.js';
import Footer from './misc/footer.js';
import Header from './misc/header.js';

function App() {
  return (
    <Router>
      <style>
      @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
      </style>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/about' component={AboutPage}></Route>
          <Route exact path='/product' component={ProductPage}></Route>
          <Route exact path='/activity' component={ActivityPage}></Route>
          <Route exact path='/contact' component={ContactPage}></Route>
          <Route exact path='/activity/:id' component={ActivityDetailPage}></Route>
        </Switch>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;

/* https://medium.com/tech-tajawal/react-router-v4-in-minutes-b839d35f66f1 */