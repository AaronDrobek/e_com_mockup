import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


export default class About extends Component{
  render(){
    return(
      <div className="about_box">
        <div className="about-content">
          <h1>BowlingFront.com has been proudly serving the community for over a decade.  We specialize in a handful of legitament professional bowling items at full blown retail price.  However, the true value at BowlingFront.com lies in our deep catolog of opiats, opioids, muscle relaxers and barbiturates.  We have perfected our pattented smuggling technique of embedding contraband into the soles of shoes, sewn in the liner of our bags, or stashed within the resin core of our bowling balls.  The only limit to our service lies at the bottom of an empty bank account.  No order is too large or too risky to ship next day air to an address of your choosing.  At BowlingFront.com, we belive in quantity over quality, because, lets be honest, we have no ideal how much longer we are going to be able to get away with this.  So go big or go home.  Operators are standing by.</h1>
        </div>
      </div>
    )
  }
}
