import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import DropDownMenu from './components/DropDownMenu';

// Icon
import { ReactComponent as Caret } from './img/icons/caret.svg';

// React Transition
// import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div>
      <Navbar>
        <NavItems icon="🏏" />
        <NavItems icon="🏏" />
        <NavItems icon="🏏" />

        <NavItems icon={ <Caret /> }>
          <DropDownMenu />
        </NavItems>
      </Navbar>
    </div>
  );
}

export default App;
