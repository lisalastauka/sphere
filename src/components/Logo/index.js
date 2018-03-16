import React from 'react';

import { LogoImg, BCSImg } from './styled';

export const Logo = () => (
  <LogoImg alt='' src='images/logo2x.png' srcset='images/logo1x.png 1x, images/logo2x.png 2x, images/logo3x.png 3x'/>
);

export const BCS = () => (
  <BCSImg alt=''  src='images/bcs2x.png' srcset='images/bcs1x.png 1x, images/bcs2x.png 2x, images/bcs3x.png 3x'/>
);
