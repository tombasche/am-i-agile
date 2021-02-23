import React from 'react';
import CSS from 'csstype';

const Footer = () => {
  return (
    <div style={footer}>
      Made by{' '}
      <a
        style={link}
        href="https://twitter.com/tcbasche"
        rel="noopener noreferrer"
        target="_blank"
      >
        @tombasche
      </a>
    </div>
  );
};

const footer: CSS.Properties = {
  position: 'absolute',
  bottom: '1em',
  fontSize: '16px',
};

const link: CSS.Properties = {
  color: 'white',
};

export default Footer;
