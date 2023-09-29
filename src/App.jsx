import {} from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
        <Nav />
        <Outlet/>
    </>
  );
}

export default App;
