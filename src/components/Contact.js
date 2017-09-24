import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class Contact extends Component{
  render(){

    return(
      <div className="contact_box">
      <div className="contact_content">
        <h4>Address: 1256 Sesame St.  Make Believe, GA 30306</h4>
        <h4>Phone: 555-555-5555</h4>
        <h4>Email: bowlingfront@hotmail.com</h4>
        <h4>Fax: 444-444-4444</h4>
      </div>
      </div>
      )
    }
  }
