import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Balls from './components/Balls';
import Bags from './components/Bags';
import Shoes from './components/Shoes';
import Item from './components/Item';
import BagItem from './components/BagItem';
import ShoeItem from './components/ShoeItem';
import About from './components/About';
import Contact from './components/Contact';




ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
  <Route  path="/balls/:name" component={Item}/>
  <Route  path='/bags/:stuff' component={BagItem}/>
  <Route  path='/shoes/:laces' component={ShoeItem}/>
  <Route  path='/contact' component={Contact}/>
  <Route  path='/about' component={About}/>
  <Route  path='/balls' component={Balls}/>
  <Route  path='/bags' component={Bags}/>
  <Route  path='/shoes' component={Shoes}/>
  <Route  path='/' component={App}/>
  </Switch>
  </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
