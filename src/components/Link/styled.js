import styled from 'styled-components';

export default styled.a`
  font-family: ${props => props.theme.fonts.graphik.regular}, sans-serif;
  ${props => props.tel &&`
    font-family: ${props.theme.fonts.graphik.medium}, sans-serif;
    font-size: 1.8rem;
  	font-weight: 500;
  `}
`;
