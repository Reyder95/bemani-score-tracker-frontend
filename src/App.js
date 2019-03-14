import React, { Component } from 'react';
import Navbar from './components/Navbar'
import HomeContent from './components/HomeContent'

class App extends Component {

  //Render this information
  render() {

    //Return the JSX (JavaScript HTML)
    return (
      //In JSX, you must have one tag, containing all your other tags.
      <div>
        {/*This renders the Navbar Component*/}
        <Navbar />
        <img src="https://placehold.it/1920x600/100"/>
        
        {/*This renders the rest of the homepage*/}
        <HomeContent />
      </div>

    )
  }
}

export default App;
