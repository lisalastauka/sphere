import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  background: white;
  display: none;
  text-align: center;
  color: rgb(26, 56, 105);

  ${props => props.open && `
    display: flex;
  `}
  ${media.desktop`
    display: none;
  `}

  small {
    color: rgb(26, 56, 105);
    margin-bottom: 5px;
  }

  button {
    color: rgb(26, 56, 105);
    font-family: ${props => props.theme.fonts.graphik.medium};
    font-weight: 500;
    width: 100%;
    margin-bottom: 10px;
  }

  a {
    width: 100%;
  }
`;

export const GoTo = styled.button`
  font-family: ${props => props.theme.fonts.graphik.medium};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.44;
  margin-bottom: 20px;
  color: rgb(26, 56, 105);
  background: transparent;
  border: none;
`;
