import React from 'react';
import Header from './Header';

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default layout;
