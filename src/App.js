import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';

function App() {
  return (
    <div>
      <Navbar>
        <NavItems icon="x" />
      </Navbar>
    </div>
  );
}

export default App;
