import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Balls from './components/Balls';
import Bags from './components/Bags';
import Shoes from './components/Bags';
import Item from './components/Item';




ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
  <Route path="/balls/:name" component={Item}/>
  <Route path='/balls' component={Balls}/>
  <Route path='/bags' component={Bags}/>
  <Route path='/shoes' component={Shoes}/>


  <Route path='/' component={App}/>
  </Switch>
  </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
