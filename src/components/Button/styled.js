import styled from 'styled-components';
import media from './../../styled-components/media';

export default styled.button`
  font-family: ${props => props.theme.fonts.graphik.regular}, sans-serif;
  color: white;
  background: ${props => props.theme.colors.btn};
  cursor: pointer;
  border-radius: 4px;
  padding: 13px 38px;
  font-size: ${props => props.theme.fontSize.small};
  position: relative;

  ${props => props.outline &&`
    background: transparent;
    color: ${props.theme.colors.textBtn};
    border: 1px solid rgba(25, 108, 255, 0.4);
    :hover {
      background: ${props.theme.colors.btn};
      color: white;
    }
  `}

  ${props => props.disabled && props.outline &&`
    :hover {
      background: transparent;
      color: ${props.theme.colors.textBtn};
    }
  `}

  ${props => props.footer &&`
    background: transparent;
    color: ${props.theme.colors.textBtn};
    cursor: default;
    border: none;
    width: 100%;
    border-radius: 0 0 4px 4px;
    border-top: 1px solid #A6C4F5;
    margin-bottom: 0;
  `}

  ${props => props.opaque &&`
    text-align: left;
    padding: 15px 20px;
    height: 60px;
    border-radius: 5px;
    border: none;
    background-color: rgba(234, 237, 242, 0.2);
    color: white;
    margin-right: 20px;
    width: 100%;
    margin-bottom: 10px;
  `}

  ${props => props.opaque && !props.disabled && `
    :hover {
      background-color: rgba(234, 237, 242, 0.4);
    }
  `}

  ${props => props.opaque && media.tablet`
    max-width: 200px;
  `}
  ${props => props.badge && `
    outline: none;
    ::before {
      z-index: 1;
      top: -10px;
      position: absolute;
      content: '';
      height: 10px;
      width: 100%;
      background-color: rgb(69,94,205);
    }
    ::after {
      top: 0;
      right: -10px;
      position: absolute;
      content: '';
      height: 100%;
      width: 10px;
      background-color: rgb(69,94,205);
    }
  `}

  img {
    display: inline;
    width: 30px;
    height: 30px;
  }

  ${props => props.wide &&`
    width: 100%;
    margin-bottom: 10px;
  `}

  ${props => props.submit &&`
    width: 100%;
    border: none;
    margin-bottom: 10px;
    font-size: ${props.theme.fontSize.medium};
    font-family: ${props.theme.fonts.graphik.medium}, sans-serif;
    font-weight: 500;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
    background: ${props.theme.colors.bigBtn};
  `}

  ${props => props.submit && props.disabled &&`
  	background-color: rgb(203, 203, 203);
    box-shadow: none;
    cursor: not-allowed;
  `}

  ${props => props.small &&`
    width: auto;
    padding: 13px;
  `}

  ${props => props.disabled &&`
    cursor: default;
  `}

  ${props => props.inactive &&`
    width: auto;
    cursor: default;
    padding: 13px;
    :hover {
      background: inherit;
      color: ${props.theme.colors.textBtn};
    }
  `}
`;

export const Group = styled.div`
  button {
    border-radius: 0;
    :nth-of-type(1){
      border-radius: 4px 0 0 4px;
    }
    :nth-last-of-type(1){
      border-radius: 0 4px 4px 0;
    }
  }
`;
