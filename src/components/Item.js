import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import bowlingball from '../data/bowlingball';
import Balls from '../components/Balls';


export default class Item extends Component{

  render(){
    console.log(this.props.match,"this is params data");
    const ball = this.props.match.params.name
    return(
      <div className="item_box">
        <div className="item_content">
        <img className="pic_box" src= {this.props.imgFull}/>
        <h4>Text: {this.props.ballName}</h4>

        </div>
      </div>
    )
  }
}
