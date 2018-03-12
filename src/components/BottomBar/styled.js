import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100vw;
  padding: 20px;
  justify-content: space-between;
  z-index: 5;
	background-image: linear-gradient(to bottom, rgba(250, 250, 250, 0.0), rgba(250, 250, 250, 0.8) 44%, rgb(250, 250, 250));
  ${media.desktop`
    background: transparent;
    padding: 0;
    width: auto;
    position: unset;
    display: none;
  `}

  a {
    width: 100%;
  }
`;
