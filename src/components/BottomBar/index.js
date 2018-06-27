import React from 'react';
import Button from './../Button';
import Container from './styled';

export default () => (
  <Container>
    <a href="https://sfera.ru/registration" target="_self">
      <Button style={{ width: "inherit" }} submit>Попробовать</Button>
    </a>
    <Button onClick={() => window.ThreadsWidget.showChat()}
      style={{	width: "60px", marginLeft: '10px', padding: '20px', backgroundColor: 'white'}}
       submit>
       <svg style={{verticalAlign: 'middle', marginRight: '10px'}} width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
         <title>Fill 2 Copy</title>
         <desc>Created with Sketch.</desc>
         <defs></defs>
         <g id="Landing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
             <g id="Landing_1_value_adding_v2" transform="translate(-1162.000000, -821.000000)" fill="#3F86F9">
                 <path d="M1181,825 L1179,825 L1179,833.999999 L1166,833.999999 L1166,835.999999 C1166,836.549998 1166.45,836.999999 1167,836.999999 L1178,836.999999 L1182,840.999999 L1182,826 C1182,825.45 1181.55,825 1181,825 Z M1177,830.999999 L1177,822 C1177,821.45 1176.55,821 1176,821 L1163,821 C1162.45,821 1162,821.45 1162,822 L1162,835.999999 L1166,831.999999 L1176,831.999999 C1176.55,831.999999 1177,831.549999 1177,830.999999 Z" id="Fill-2-Copy"></path>
             </g>
         </g>
     </svg>
     </Button>
  </Container>
);
