import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import bowlingball from '../data/bowlingball';



export default class Item extends Component{

  render(){

    const ball = this.props.match.params.name
    console.log(this.props.match.params.name, 'this should be the name');
    let oneBall = bowlingball.map((balls) =>{

      if(balls.ballName === ball){

        return(
          <div key={balls.id}>
          <img className="pic_box" src={balls.imgFull}/>
            <h4>Model: {balls.ballName}</h4>
            <h4>Core Type: {balls.coreType}</h4>
            <h4>Cover Stock: {balls.coverstock}</h4>
            <h4>Color: {balls.color}</h4>
            <h4>Finishing Steps: {balls.finishingSteps}</h4>
            <h4>Weights: {balls.weights}</h4>
            <h4>RG Max: {balls.rgMax}</h4>
            <h4>RG Min: {balls.rgMin}</h4>
            <h4>RG Differential: {balls.rgDifferential}</h4>
            <h4>Descripton: {balls.description}</h4>
            <h4>Price: ${balls.price}</h4>


          </div>

        )
      }
    })
    return(
      <div className="item_box">
        <div className="item_content">
        {oneBall}

        </div>
      </div>
    )
  }
}
