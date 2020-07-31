import React from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import NavItems from './components/NavItems';
import DropDownMenu from './components/DropDownMenu';
import Section from './components/Section';
import BannerContent from './components/BannerContent'
import TopBtn from './inc/topBtn';
import Footer from './inc/Footer';

// Icon
import { ReactComponent as Caret } from './img/icons/caret.svg';
import { ReactComponent as ProgrammerConcept } from './img/icons/programmer-concept.svg';
import { ReactComponent as Github } from './img/icons/github.svg';
import { ReactComponent as Linkedin } from './img/icons/linkedin.svg';
import { ReactComponent as Twitter } from './img/icons/twitter.svg';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItems 
          icon="🔥" 
          linkSection="#About"
          linkName="About Me" 
          linkClass="icon-text-button"
        />

        <NavItems 
          linkSection="#Skills" 
          icon="🔧" 
          linkName="Skills" 
          linkClass="icon-text-button"
        />

        <NavItems 
          icon={ <Github /> }
          bgColor="#c0c0c0"
          linkSection="https://github.com/zaimeali"
          target={ true }
        />

        <NavItems 
          icon={ <Linkedin /> }
          linkSection="https://www.linkedin.com/in/abdul-raffay-rizwan/"
          target={ true }
        />

        <NavItems 
          icon={ <Twitter /> }
          linkSection="https://twitter.com/zaime_ali"
          target={ true }
        />

        <NavItems icon={ <Caret /> }>
          <DropDownMenu />
        </NavItems>
      </Navbar>

      <Section 
        id="Banner"
        sectionClass="section" 
        bgColor="#eee" 
        imgIllus={ <ProgrammerConcept /> }
        bannerContent={ <BannerContent /> }
      />

      <Section 
        SectionId="About"
        sectionClass="section" 
        bgColor="#111" 
      />

      <Section 
        SectionId="Skills"
        sectionClass="section-84" 
        bgColor="#dfd" 
      />

      <TopBtn />


      <Footer />
    </div>
  );
}

export default App;
