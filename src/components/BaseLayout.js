import React, {Component} from 'react';
import logo from '../logo.svg';
import {NavLink} from 'react-router-dom';


export default class BaseLayout extends Component{
  render(){
    return(
      <div className="base_box">
        <div className="base_content">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h2>
              <NavLink activeClassName="selected" to='/'>Home</NavLink>
                </h2>
                <h2>
                <NavLink activeClassName="selected" to='/balls'>Balls</NavLink>
                  </h2>
                  <h2>
                  <NavLink activeClassName="selected" to='/bags'>Bags</NavLink>
                    </h2>
                    <h2>
                    <NavLink activeClassName="selected" to='/shoes'>Shoes</NavLink>
                      </h2>
          </div>
        </div>
            {this.props.children}
        <div className="footer">
        </div>
      </div>

    )
  }
}
