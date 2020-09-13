import React from 'react';
import Topbar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';

function PageDefault({ children }) {
  return (
    <>
      <Topbar />
      <main>{children}</main>

      <Footer />
    </>
  );
}

export default PageDefault;
