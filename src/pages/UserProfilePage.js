import React from 'react' //Import react
import TopSection from '../components/profile-page/TopSection'
import UserSongs from '../components/profile-page/UserSongs'
import UserActivity from '../components/profile-page/UserActivity'
import UserGoals from '../components/profile-page/UserGoals'
import Footer from '../components/global/Footer'

import './css/user-page-global.css'
import './css/user-activity.css'
import './css/user-songs.css'
import './css/user-goals.css'

class UserProfilePage extends React.Component {


  openContent(tabName, e) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i< tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active"
  }

    render() {
        return (
            <div>
              <TopSection />
              <div className="profile-tabs">
                <ul>
                    <li><a class="tablinks active" href="#" onClick={(e) => this.openContent('tabActivity', e)}>Activity</a></li>
                    <li><a class="tablinks" href="#" onClick={(e) => this.openContent('tabSongs', e)}>Songs</a></li>
                    <li><a class="tablinks" href="#" onClick={(e) => this.openContent('tabGoals', e)}>Goals</a></li>
                </ul>
              </div>
              <UserSongs />
              <UserActivity />
              <UserGoals />
              <Footer />
            </div>
        )
    }
}

export default UserProfilePage //Export this component
