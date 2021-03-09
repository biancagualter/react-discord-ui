import React from 'react';
import GlobalStyles from './styles/GlobalStyles'
import Layout from './components/Layout';
import ServerList from './components/ServerList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout />
      <ServerList />
    </>
  );
}

export default App;
