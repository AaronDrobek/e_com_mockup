import React, {Component} from 'react';
import bowlingBall from '../data/bowlingball';
import {NavLink} from 'react-router-dom';

let data = bowlingBall;
console.log(data, "this is data");

export default class Balls extends Component{
  render(){
    let data = bowlingBall;
    console.log(data, "this is data");
    let match = this.props.match;
    let listBalls = data.map((ball) =>{
      console.log(ball, "this is the map over");

      return(

      <div key={ball.id}>
        <h4>Model: {ball.ballName}</h4>
        <h4>Price: ${ball.price}</h4>
            <NavLink activeClassName="active" className="actorLink"
            to={`${match.url}/${ball.ballName}`}>
            <img className="pic_box" src={ball.imgFull}/>
            </NavLink>
        </div>

      )
    })






    return(

      <div className="balls_box">
        <div className="balls_content">
          {listBalls}
        </div>
      </div>
    )
  }
}
