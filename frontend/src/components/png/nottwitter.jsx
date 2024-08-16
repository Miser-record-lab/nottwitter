import React from 'react';

const NotTwitterLogo = (props) => (
  <img
    src={require('../png/nottwitter.png')}
    alt="Not Twitter Logo"
    {...props} // Vous permet de passer des classes CSS, des styles, etc.
  />
);

export default NotTwitterLogo;
