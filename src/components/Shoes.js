import React, {Component} from 'react';
import bowlingShoe from '../data/bowlingShoe';
import {NavLink} from 'react-router-dom';


export default class Bags extends Component{
  render(){
    let data = bowlingShoe;
    console.log(data, "this is bag data");
    let listShoes = data.map((shoe) =>{
      return(
        <div key ={shoe.id}>
          <h4>Model: {shoe.shoeName}</h4>
          <h4>Price: ${shoe.price}</h4>
          <img className="pic_box" src={shoe.imgFull}/>
        </div>
      )
    })

    return(
      <div className="shoe_box">
      <div className="shoe_content">
        {listShoes}
      </div>
      </div>
    )
  }
}
