import styled from 'styled-components';
import media from './../../styled-components/media';
import Button from '../Button/styled';

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

  .rc-checkbox-checked .rc-checkbox-inner {
    border-color: ${props => props.theme.colors.checkbox};
    background-color: ${props => props.theme.colors.checkbox};
  }

  .rc-checkbox:hover .rc-checkbox-inner, .rc-checkbox-input:focus + .rc-checkbox-inner {
    border-color: ${props => props.theme.colors.checkbox};
  }

  label {
    display: inline;
    font-size: 12px;
  	line-height: 1.58;
  	text-align: left;

    a {
      text-decoration: underline;
      font-family: inherit;
      color: inherit;
    }
  }
`

export const ChatButton = styled(Button)`
  width: 100%;
  max-width: none;
  background-color: rgb(250, 250, 250);
  font-size: 16px;
  font-family: ${props => props.theme.fonts.graphik.medium};
  color: inherit;
  text-align: center;
`
