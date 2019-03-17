import React, { Component } from 'react' //Importing react
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' //Importing the router
import UserSongList from './pages/UserSongList' //Importing the user song list page
import Home from './pages/Home' //Importing the homepage

//Function that opens and closes the navigation bar on mobile displays.
function openNav() {

  //If the navigation bar is shown
  if (document.getElementById('open-nav').style.display == "block")
  {
      //Hide it
      document.getElementById('open-nav').style.display = "none"
  }
  else {
      //Otherwise, show it
      document.getElementById('open-nav').style.display = "block";
  }
}

//The whole application
class App extends Component {

  //Render this information
  render() {

    //Return the JSX (JavaScript HTML)
    return (
      /*
        The router which is our navigation bar
        Every anchor tag is replaced with a Link component
        This link component accepts a property called "to", which is where
        we place the routing path. At the bottom that is handled to which component
        it routes to.
      */
      <Router>
        <div>
          <div className="top-nav">
            <div className="menu-parent">
              <div className="menu-icon" onClick={openNav}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ul id="open-nav">
              <li><Link to="/" id="link">Home</Link></li>
                <li>
                  <div className="dropdown">
                    <Link id="link" className="global-song-list">Global Song List <i className="fa fa-angle-down"></i></Link>
                    <div className="dropdown-content">
                      <p><Link id="link" to="/global-songs/sound-voltex" className="dropdown-link">SOUND VOLTEX</Link></p>
                      <p><Link id="link" to="/global-songs/dance-dance-revolution" className="dropdown-link">DanceDanceRevolution <br /> (coming soon)</Link></p>
                      <p><Link id="link" to="/global-songs/beatmania-iidx" className="dropdown-link">Beatmania IIDX <br /> (coming soon)</Link></p>
                    </div>
                  </div>
                </li>
                <li><Link id="link" to="/users" >User List</Link></li>
                <div className="user-profile">
                  <li>
                    <div className="dropdown">
                    <Link id="link" to="/users/id">
                      <img className="rounded-circle username" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ffb8a90a8b934ac020dc89d07a074f9007abfcc1_full.jpg" alt="profile-picture" />Scarlet
                    </Link>
                    <div className="dropdown-content">
                      <p><Link id="link" className="dropdown-link" to="/users/id/songs">Song List</Link></p>
                      <p><Link id="link" className="dropdown-link" to="/users/id/goals">Goals</Link></p>
                      <p><Link id="link" className="dropdown-link" to="/profile-settings">Profile Settings</Link></p>
                      <p><Link id="link" className="dropdown-link" to="/logout">Logout</Link></p>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          {/*Route a path to a component*/}
          <Route exact path="/" component={Home} />
          <Route path="/users/id/songs" component={UserSongList} />
        </div>
      </Router>

    )
  }
}

export default App;
