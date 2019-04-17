import React from 'react'

class UserActivity extends React.Component {
    render() {
        return(
            <div className="tabcontent componentUserActivity" id="tabActivity">
            
              <div className="user-statistics-container">
              <h3>My Stats</h3>
              <hr className="border-secondary"/>
                <div className="user-statistics">
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Scores Posted: </strong></td>
                                <td>237</td>
                            </tr>
                            <tr>
                                <td><strong>Collections Made: </strong></td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><strong>Date Joined: </strong></td>
                                <td>3/2/2019</td>
                            </tr>
                            <tr>
                                <td><strong>Songs Added: </strong></td>
                                <td>157</td>
                            </tr>
                            <tr>
                                <td><strong>Total Goals: </strong></td>
                                <td>17</td>
                            </tr>
                            <tr>
                                <td><strong>Completed Goals: </strong></td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
                <div className="user-feed">
              <div className="activity-blocks">
                <h2>Latest Feed</h2>
                <hr className="border-secondary"/>
                <div className="activityGoals border rounded-lg shadow p-3">
                  <img id="activityImage" src="https://placehold.it/100/100" class="rounded-circle" />
                  <p id="activityText"><strong>Scarlet</strong> just set a new goal "I must clear this song!"</p>
                  <hr />
                  <p><strong>Song:</strong> <img src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/> Morimori Atsushi - PUPA</p>
                  <p><strong>Difficulty:</strong> EXHAUST 16</p>
                </div>

                <div className="activityScores border rounded-lg shadow p-3">
                  <img id="activityImage" src="https://placehold.it/100/100" class="rounded-circle" />
                  <p id="activityText"><strong>Scarlet</strong> has just uploaded a new score! Click to go to the song page and try to set your own.</p>
                  <hr />
                  <p><strong>Song:</strong> <img src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/> Morimori Atsushi - PUPA</p>
                  <p><strong>Difficulty:</strong> EXHAUST 16</p>
                  <p id="test"><strong>Score:</strong> 10,000,000</p>
                </div>

                <div className="activityScores border rounded-lg shadow p-3">
                  <img id="activityImage" src="https://placehold.it/100/100" class="rounded-circle" />
                  <p id="activityText"><strong>Scarlet</strong> has just uploaded a new score! Click to go to the song page and try to set your own.</p>
                  <hr />
                  <p><strong>Song:</strong> <img src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/> Morimori Atsushi - PUPA</p>
                  <p><strong>Difficulty:</strong> EXHAUST 16</p>
                  <p id="test"><strong>Score:</strong> 10,000,000</p>
                </div>

                <div className="activityScores border rounded-lg shadow p-3">
                  <img id="activityImage" src="https://placehold.it/100/100" class="rounded-circle" />
                  <p id="activityText"><strong>Scarlet</strong> has just uploaded a new score! Click to go to the song page and try to set your own.</p>
                  <hr />
                  <p><strong>Song:</strong> <img src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/> Morimori Atsushi - PUPA</p>
                  <p><strong>Difficulty:</strong> EXHAUST 16</p>
                  <p id="test"><strong>Score:</strong> 10,000,000</p>
                </div>
              </div>
              </div>

            </div>
        )
    }
}

export default UserActivity;