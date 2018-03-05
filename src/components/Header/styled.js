import styled from 'styled-components';

export default styled.div`
  margin-bottom: 20px;

  h1 > b {
    white-space: nowrap;
    ${props => props.theme.colored.gradient};
  }
`
