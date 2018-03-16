import React from 'react';
import AtvImg from './../../../utils/lib/components/AtvImg';


export default class Card extends React.Component {

  render(){
    return (
      <AtvImg
        layers={[
          'images/card-sfera.png',
          'images/card-sfera.png',
        ]}
        staticFallback="images/card-sfera.png"
        isStatic={false}
        className={'thisIsOptional'}
        style={{ width: 320, height: 190 }}
      />

    );
  }
}
