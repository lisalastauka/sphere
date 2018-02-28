import styled from 'styled-components';
import media from '../../styled-components/media';

export default styled.div`
  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }

  &::after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
    padding-bottom: 4rem;
  }

  .slick {
    &-slider {
      position: relative;
      display: block;
      user-select: none;
      touch-action: pan-y;
    }

    &-list {
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;

      &:focus {
        outline: none;
      }

      &.dragging {
        cursor: pointer;
        cursor: hand;
      }
    }

    &-track {
      position: relative;
      top: 0;
      left: 0;
      display: block;
      margin-left: auto;
      margin-right: auto;

      &::before,
      &::after {
        display: table;
        content: '';
      }

      &::after {
        clear: both;
      }
    }

    &-slide img {
      display: block;
    }

    &-prev,
    &-next {
      letter-spacing: -99999rem;
      position: absolute;
      top: calc(50% - 2.5rem);
      visibility: hidden;
      padding: 0;
      cursor: pointer;
      color: transparent;
      width: 10rem;
      height: 5rem;
      outline: none;
      background: transparent;
      border-radius: ${props => props.theme.border.radius};
      opacity: ${props => props.theme.opacity.text01};
      transition: ${props => props.theme.transition};
      background-position: center;
      background-size: 2rem;
      background-repeat: no-repeat;
      border: solid 0.1rem black;
      ${media.tablet`
        visibility: visible;
        display: block;
      `}

      &:hover,
      &:focus,
      &:hover,
      &:focus {
        transition: ${props => props.theme.transition};
        opacity: ${props => props.theme.opacity.text03};
      }
    }

    &-prev {
      left: -8rem;
      transform: rotate(-90deg);
    }

    &-next {
      right: -8rem;
      transform: rotate(90deg);
    }

    &-dots {
      position: absolute;
      display: block;
      width: 100%;
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: center;

      li {
        position: relative;
        display: inline-block;
        margin: 0 0.5rem;
        padding: 0;
        cursor: pointer;

        button {
          font-size: 0;
          line-height: 0;
          display: block;
          padding: 0.5rem;
          cursor: pointer;
          color: transparent;
          border: 0;
          outline: none;
          border-radius: 100%;
          background-color: rgba(0, 0, 0, 0.1);
          text-indent: -9999rem;
        }

        &.slick-active {
          button {
            background-color: ${props => props.theme.colors.purple};
          }
        }
      }
    }

    &-slider &-track,
    &-slider &-list {
      transform: translate3d(0, 0, 0);
    }

    &-slide {
      display: none;
      float: left;
      height: 100%;
      min-height: 0.1rem;
    }

    &-slide.slick-loading img {
      display: none;
    }

    &-slide.dragging img {
      pointer-events: none;
    }
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 0.1rem solid transparent;
  }
`;
