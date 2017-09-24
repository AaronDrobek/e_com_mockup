import React, {Component} from 'react';
import bowlingBall from '../data/bowlingball';
import {NavLink} from 'react-router-dom';

let data = bowlingBall;

export default class Balls extends Component{
  render(){
    let data = bowlingBall;
    let match = this.props.match;
    let listBalls = data.map((ball) =>{


      return(

      <div className="balls_content" key={ball.id}>
        <h4 className="model_ball">{ball.ballName}</h4>
        <h4 className="price">Price: ${ball.price}</h4>
            <NavLink activeClassName="active"
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
