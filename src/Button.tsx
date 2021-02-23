import CSS from 'csstype';
import React, { FunctionComponent } from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FunctionComponent<ButtonProps> = (props) => (
  <button onClick={props.handleClick} style={buttonStyles}>
    {props.children}
  </button>
);

const buttonStyles: CSS.Properties = {
  backgroundColor: '#008CBA',
  border: 'none',
  color: 'white',
  padding: '10px 28px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '24px',
  maxWidth: '10em',
  margin: '15px',
};
