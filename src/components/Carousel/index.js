import Slider from 'react-slick';
import React from 'react';
import Carouseler from './styled';

const Carousel = (props) => (
  <Carouseler>
    <Slider {...props}>{props.children}</Slider>
  </Carouseler>
);

export default Carousel;
