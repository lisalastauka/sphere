import React from 'react';

import { LogoImg, BCSImg } from './styled';

export const Logo = () => (
  <LogoImg alt='' src='images/Logo_sfera.svg' data-srcset='images/Logo_sfera.svg 1x, images/Logo_sfera.svg 2x, images/Logo_sfera.svg 3x' >
  </LogoImg>
);

export const BCS = () => (
  <BCSImg alt=''  src='images/bcs2x.png' data-srcset='images/bcs1x.png 1x, images/bcs2x.png 2x, images/bcs3x.png 3x'/>
);
