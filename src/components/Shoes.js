import React, {Component} from 'react';
import bowlingShoe from '../data/bowlingShoe';
import {NavLink} from 'react-router-dom';


export default class Bags extends Component{
  render(){
    let match = this.props.match;
    let data = bowlingShoe;
    console.log(data, "this is bag data");
    let oneShoe = data.map((shoe) =>{
      return(
        <div key ={shoe.id}>
          <h4>Model: {shoe.shoeName}</h4>
          <h4>Price: ${shoe.price}</h4>
          <NavLink activeClassName="active"
          to={`${match.url}/${shoe.shoeName}`}>
          <img className="pic_box" src={shoe.imgFull}/>
          </NavLink>
        </div>
      )
    })

    return(
      <div className="shoe_box">
      <div className="shoe_content">
        {oneShoe}
      </div>
      </div>
    )
  }
}
