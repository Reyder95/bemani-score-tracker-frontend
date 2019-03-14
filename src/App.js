import React, { Component } from 'react';
import Navbar from './components/Navbar'
import HomeContent from './components/HomeContent'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src="https://placehold.it/1920x600/100"/>
        <div>
          <HomeContent />
        </div>
      </div>
    )
  }
}

export default App;
