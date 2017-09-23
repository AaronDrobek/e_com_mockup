import React, {Component} from 'react';
import bowlingBag from '../data/bowlingBag';
import {NavLink} from 'react-router-dom';


export default class Bags extends Component{
  render(){
    let match = this.props.match
    let data = bowlingBag;
    console.log(data, "this is bag data");
    let listBags = data.map((bag) =>{
      return(
        <div key ={bag.id}>
          <h4>Model: {bag.bagName}</h4>
          <h4>Price: ${bag.price}</h4>
          <NavLink activeClassName="active"
          to={`${match.url}/${bag.bagName}`}>
          <img className="pic_box" src={bag.imgFull}/>
          </NavLink>
        </div>
      

      )
    })

    return(
      <div className="bags_box">
      <div className="bags_content">
        {listBags}
      </div>
      </div>
    )
  }
}
