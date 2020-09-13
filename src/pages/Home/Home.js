import React from 'react';
// import TopBar from '../../components/TopBar/TopBar';
import Projects from '../Projects/Projects';
import PageDefault from '../../components/PageDefault/PageDefault';

function Home() {
  return (
    <>
      <PageDefault>
        <Projects />
      </PageDefault>
    </>
  );
}

export default Home;
