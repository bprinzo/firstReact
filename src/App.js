import React from 'react';
import Nav from './components/nav'
import Wrapper from './components/wrapper'
import Body from './components/body'

import './components/styles/app.css'
import './components/styles/media.css'
import './components/styles/body.css'
import './components/styles/menu.css'
import './components/styles/nav.css'
import './components/styles/wrapper.css'
import './components/styles/jikan.css'


export default function App() {
  return (
    <>
      <Wrapper>
        <Nav></Nav>
      </Wrapper>
      <Body></Body>
    </>
  );
}