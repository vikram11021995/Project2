import React from 'react';
import {HashRouter , Route} from 'react-router-dom';
import Header from './header';
import Home from './home';

function MyApp() {
  
  return <HashRouter>
    <Header />
    <Route exact path="/home" component={Home} />
    </HashRouter>
}

export default MyApp;
