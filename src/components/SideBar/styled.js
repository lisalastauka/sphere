import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  flex-direction: column;
  height: 100%;
  position: fixed;
  box-shadow: 0px 10px 30px rgba(51, 45, 179, 0.0990716), 0px 5px 5px rgba(32, 46, 113, 0.1);
  background: white;
  width: 400px;
  min-height: 100vh;
  z-index: 4;
  top: 0;
  right: 0;
  display: none;
  ${media.desktop`
    display: flex;
  `}
`