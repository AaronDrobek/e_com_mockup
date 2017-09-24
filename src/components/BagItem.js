import React, {Component} from 'react';
import bowlingBag from '../data/bowlingBag';

export default class BagItem extends Component{
  render(){
    let bagData = bowlingBag;
    let bags = this.props.match.params.stuff;
    let oneBag = bagData.map((tote) =>{
      if(tote.bagName === bags){
        return(
        <div key={tote.id}>
          <img className="pic_box"src={tote.imgFull2}/>
          <img className="pic_box"src={tote.imgFull}/>
          <h4>Model: {tote.bagName}</h4>
          <h4>Warranty: {tote.warranty}</h4>
          <h4>Color: {tote.color}</h4>
          <h4>Description: {tote.description}</h4>
          <h4>Materials: {tote.materials}</h4>
          <h4>Price: {tote.price}</h4>
        </div>
      )
      }
    })
    return(
      <div className="item_box">
      <div className="item_content">
        {oneBag}

      </div>
      </div>
    )
  }
}
