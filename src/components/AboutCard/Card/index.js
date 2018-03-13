import React from 'react';
import _ from 'underscore';
import Img from './styled';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this._throttledMouseMove = _.throttle(this._throttledMouseMove.bind(this), 20);
  }

  _throttledMouseMove = (e) => {
    this.setState(
      {
        x: e.screenX,
        y: e.screenY,
      }
    );
  }


  _onMouseMove = (e) => {
   e.persist();
   this._throttledMouseMove(e);
 }

  render(){
    return (
      <Img onMouseMove={this._onMouseMove.bind(this)} alt='' src='images/card.png'/>
    );
  }
}
