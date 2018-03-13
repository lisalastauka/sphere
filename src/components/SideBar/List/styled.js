import styled from 'styled-components';

export default styled.div`
  text-align: left;
  ul {
    list-style: none;
    padding: 0 0 0 30px;
  }

  li {
    position: relative;
    list-style-type: none;
    margin: 15px 0;
    cursor: pointer;
  }
  li:before {
    content: "";
    position: absolute;
    top: 3px;
    left: -30px;
    width: 25px;
    height: 20px;
    background: url('images/check.svg') no-repeat;
  }
`
