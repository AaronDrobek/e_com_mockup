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




ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
  <Route exact path="/balls/:name" component={Item}/>
  <Route exact path='/bags/:stuff' component={BagItem}/>
  <Route exact path='/shoes/:laces' component={ShoeItem}/>
  <Route exact path='/balls' component={Balls}/>
  <Route exact path='/bags' component={Bags}/>
  <Route exactpath='/shoes' component={Shoes}/>
  <Route exact path='/' component={App}/>
  </Switch>
  </BaseLayout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
