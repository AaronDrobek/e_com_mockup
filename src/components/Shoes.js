import React, {Component} from 'react';
import bowlingShoe from '../data/bowlingShoe';
import {NavLink} from 'react-router-dom';


export default class Bags extends Component{
  render(){
    let match = this.props.match;
    let data = bowlingShoe;
    let oneShoe = data.map((shoe) =>{
      return(
        <div key ={shoe.id}>
          <h4 className="model_ball"> {shoe.shoeName}</h4>
          <h4 className="price">Price: ${shoe.price}</h4>
          <NavLink activeClassName="active"
          to={`${match.url}/${shoe.shoeName}`}>
          <img className="pic_box" src={shoe.imgFull}/>
          </NavLink>
        </div>
      )
    })

    return(
      <div className="balls_box">
      <div className="balls_content">
        {oneShoe}
      </div>
      </div>
    )
  }
}
