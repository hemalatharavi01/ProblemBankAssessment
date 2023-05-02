import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Assessment from './Assessment';
import LoginPage from './LoginPage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/Assessment" component={Assessment}/>
      <Route exact path="/" component={LoginPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;