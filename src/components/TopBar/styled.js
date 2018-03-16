import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  padding: 20px;
  justify-content: space-between;
  z-index: 5;
	background-image: linear-gradient(to top, rgba(250, 250, 250, 0.0), rgba(250, 250, 250, 0.8) 44%, rgb(250, 250, 250));
  ${media.desktop`
    background: transparent;
    padding: 0;
    width: auto;
    position: static;
    display: block;
  `}
`;

export const Toggle = styled.div`
  color: #0B51C4;
  cursor: pointer;
  ${media.desktop`
    display: none;
  `}
`;

export const OpenClose = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  width: 15px;
  height: 12px;
  background-repeat: no-repeat;
  background-image: url(images/burger.svg);
  ${props => props.open &&`
    background-image: url(images/cross.svg);
  `}
`;

export const Call = styled.div`
  position: absolute;
  top: 20px;
  right: 480px;
  padding: 20px 0;
  min-height: 85px;
  margin: 0;
  display: none;

  ${media.desktop`
    display: block;
  `}

  a {
  	line-height: 1.11;
  	text-align: right;
  }
`;
