import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import DropDownMenu from './components/DropDownMenu';
import Section from './components/Section';
import BannerContent from './components/BannerContent'

// Icon
import { ReactComponent as Caret } from './img/icons/caret.svg';
import { ReactComponent as ProgrammerConcept } from './img/icons/programmer-concept.svg';

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

      <Section 
        sectionClass="section" 
        bgColor="#eee" 
        imgIllus={ <ProgrammerConcept /> }
        bannerContent={ <BannerContent /> }
      />

      <Section 
        sectionClass="section" 
        bgColor="#111" 
      />

      <Section 
        sectionClass="section" 
        bgColor="#dfd" 
      />

    </div>
  );
}

export default App;
