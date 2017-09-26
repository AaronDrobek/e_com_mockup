import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import pin from '../2000px-Pin_svg (77)_flat_new.svg';


export default class BaseLayout extends Component{
  render(){
    return(
      <div className="base_box">
        <div className="base_content">
          <div className="App-header">
            <img src={pin} className="App-logo" alt="logo" />
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
                      <h2>
                      <NavLink className="right_nav" activeClassName="selected" to='/about'>About</NavLink>
                        </h2>
                        <h2>
                        <NavLink className="right_nav2" activeClassName="selected" to='/contact'>Contact</NavLink>
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
