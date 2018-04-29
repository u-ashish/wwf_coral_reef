import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Footer } from './Components/Footer/Footer'
import logo from './logo.svg';
import './App.css';

import MapContainer from './Containers/MapContainer'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar className='blue-grey darken-4' brand='World Wildlife Fund' left>
          <NavItem href='#'>Welcome!</NavItem>
        </Navbar> */}
        <MapContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
