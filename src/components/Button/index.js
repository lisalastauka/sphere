import React from 'react';
import Button, { Group } from './styled';

export default ({ children, ...props}) => (
  <Button {...props} >{children}</Button>
);

export const ButtonGroup = ({ children, ...props}) => (
  <Group {...props} >{children}</Group>
);
