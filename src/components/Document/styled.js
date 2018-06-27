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
  background-size: 70%;
  background-position: top;
  background-image: url(images/document.png);
  background-image: image-set(url(images/document.png) 1x, url(images/document.png) 2x, url(images/document.png) 3x);
   /* background-origin: content-box; */
  background-repeat: no-repeat;
  position: relative;
  overflow: overlay;
  margin-top: 70px;
  /* display: none; */
  padding: 22% 0 0 0;
  background-size: 70%;
  content: '';
  max-height: 620px;
  overflow: hidden;

  ${media.bigPhone`
    background-position-x: 93%;
    background-size: 30%;
    padding: 10% 0;
    max-height: 366px;
  `}

  ${media.tablet`
    margin: 0;
    max-height: 347px;
  `}

  ${media.bigTablet`
    background-position-x: 90%;
    max-height: 480px;
  `}

  ${media.bigDesktop`
    background-position-x: 93%;
  `}
`;

export const ShadowCarousel = styled(Carousel)`
  .slick {
    &-slide {
      opacity: 0.6;
      transition: opacity 0.2s ease-out;
    }
    &-active {
      opacity: 0.6;
      transition: opacity 0.2s ease-out;
    }
    &-center{
      opacity: 1;
      border-radius: 0;
      transition: opacity border-radius 0.2s ease-out;
    }
  }
  ${media.bigPhone`
    .slick {
      &-slide {
        opacity: 0.1;
        transition: opacity 0.2s ease-out;
      }
      &-active {
        opacity: 0.3;
        transition: opacity 0.2s ease-out;
      }
      &-center {
        opacity: 0.8;
        transition: opacity 0.2s ease-out;
      }
      &-center + img {
        opacity: 1;
        border-radius: 0;
        transition: opacity border-radius 0.2s ease-out;
      }
    }
  `}
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
