import React from 'react';
import AtvImg from './../../../utils/lib/components/AtvImg';


export default class Card extends React.Component {

  render(){
    return (
      <AtvImg
        layers={[
          'images/card-sfera2x.png',
          'images/card-sfera2x.png',
        ]}
        staticFallback="images/card-sfera2x.png"
        isStatic={false}
        className={'thisIsOptional'}
        style={{ width: 320, height: 190 }}
      />

    );
  }
}
