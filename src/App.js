import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import DropDownMenu from './components/DropDownMenu';
import Section from './components/Section';

// Icon
import { ReactComponent as Caret } from './img/icons/caret.svg';


function App() {
  return (
    <div>
      <Navbar>
        <NavItems icon="🏏" />
        <NavItems icon="🏏" />

        <NavItems icon={ <Caret /> }>
          <DropDownMenu />
        </NavItems>
      </Navbar>

      <Section bgColor="#eee" />

      <Section bgColor="#111" />

    </div>
  );
}

export default App;
