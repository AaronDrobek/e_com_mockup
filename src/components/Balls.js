import React, {Component} from 'react';
import bowlingBall from '../data/bowlingball';

let data = bowlingBall;
console.log(data.ballName, "this is data");

export default class Balls extends Component{
  render(){





    return(

      <div className="balls_box">
        <div className="balls_content">
          <div className="test">
          </div>
        </div>
      </div>
    )
  }
}
