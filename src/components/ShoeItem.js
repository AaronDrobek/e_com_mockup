import React, {Component} from 'react';
import bowlingShoe from '../data/bowlingShoe';

export default class ShoeItem extends Component{
  render(){

    let shoes = this.props.match.params.laces;
    let shoeItem = bowlingShoe.map((boot) =>{
      if(boot.shoeName === shoes){
        return(
          <div key={boot.id}>
          <img className="pic_box" src={boot.imgFull2}/>
            <img className="pic_box" src={boot.imgFull}/>
            <h4>Model: {boot.shoeName}</h4>
            <h4>Color: {boot.color}</h4>
            <h4>Sizes: {boot.size}</h4>
            <h4>Description: {boot.description}</h4>
            <h4>Price: ${boot.price}</h4>

          </div>
        )
      }
    })


    return(
      <div className="item_box">
      <div className="item_content">
        {shoeItem}

      </div>
      </div>
    )
  }
}
