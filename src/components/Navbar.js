import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="top-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li>
                        <div className="dropdown">
                            <a href="#" className="global-song-list">Global Song List <i className="fa fa-angle-down"></i></a>
                            <div className="dropdown-content">
                                <p><a className="dropdown-link" href="#">SOUND VOLTEX</a></p>
                                <p><a className="dropdown-link" href="#">DanceDanceRevolution <br /> (coming soon)</a></p>
                                <p><a className="dropdown-link" href="#">Beatmania IIDX <br /> (coming soon)</a></p>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">User List</a></li>
                    <div className="user-profile">
                        <li>
                            <div className="dropdown">
                                <a href="#">
                                    <img className="rounded-circle username" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ff/ffb8a90a8b934ac020dc89d07a074f9007abfcc1_full.jpg" alt="profile-picture" />Scarlet
                                </a>
                                <div className="dropdown-content">
                                    <p><a className="dropdown-link" href="#">Song List</a></p>
                                    <p><a className="dropdown-link" href="#">Goals</a></p>
                                    <p><a className="dropdown-link" href="#">Profile Settings</a></p>
                                    <p><a className="dropdown-link" href="#">Logout</a></p>
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Navbar;