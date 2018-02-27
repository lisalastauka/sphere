import React from 'react';
import Link from './styled';

export default ({href, children, ...props}) => (
  <Link href={href} {...props} >{children}</Link>
);
