import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import media from './../../styled-components/media';
import Carousel from './../Carousel';

export default styled.div`
  margin-bottom: 70px;
  ${media.tablet`
    margin-bottom: 140px;
  `}
`;

export const Column = styled(Col)`
  margin-bottom: -10%;
`;

export const CarouselBox = styled.div`
  width: 100vw;
  background: url(images/document.png) 93% top / 30% no-repeat;
  padding-top: 10%;
  margin: 0;
  position: relative;
  overflow: overlay;
  display: none;

  ${media.tablet`
    display: block;
  `}
`;

export const ShadowCarousel = styled(Carousel)`
  .slick {
    &-slide {
      opacity: 0.1;
      transition: all 0.2s ease-out;
    }
    &-active {
      opacity: 0.3;
      transition: all 0.2s ease-out;
    }
    &-center {
      opacity: 0.8;
      transition: all 0.2s ease-out;
    }
    &-center + img {
      opacity: 1;
      transition: all 0.2s ease-out;
    }
  }

  img {
    padding: 0 30px;
  }
`;

export const Inner = styled(Row)`
  margin-bottom: 0;

  ${media.tablet`
    margin-bottom: -60px;
  `}

  p {
    margin-bottom: 20px;
    ${media.tablet`
      margin-bottom: 40px;
    `}
  }
`
