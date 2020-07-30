import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';

// Icon
import { ReactComponent as Caret } from './img/icons/caret.svg';

function App() {
  return (
    <div>
      <Navbar>
        <NavItems icon="🏏" />
        <NavItems icon="🏏" />
        <NavItems icon="🏏" />

        <NavItems icon={ <Caret /> }>

        </NavItems>
      </Navbar>
    </div>
  );
}

export default App;
