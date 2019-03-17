import React from 'react' //Import react

class UserSongList extends React.Component {
    render() {
        return (
            <div>
              <div className="top-banner">  
                <img src="http://bsqcap.com/wp-content/uploads/2015/04/london_skyline_at_night-wallpaper-1920x600.jpg"/>      
                <div className="username-song-list">Scarlet's Song List</div>
              </div>
              <div className="collections-list">
                <ul>
                    <li><a href="#">All Songs</a></li>
                    <li><a href="#">Collection 1</a></li>
                    <li><a href="#">Collection 2</a></li>
                    <li><a href="#">Collection 3</a></li>
                    <li><a href="#">Collection 4</a></li>
                    <li><a href="#">Collection 5</a></li>
                </ul>
              </div>
              <div className="table-wrap border border-secondary rounded">
                <table>
                  <thead>
                    <tr>
                      <th className="songNumber">#</th>
                      <th className="songJacket">Jacket</th>
                      <th className="songArtist">Artist</th>
                      <th className="songTitle">Title</th>
                      <th className="songGame">Game</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr className="border-top">
                        <td className="songNumber">1</td>
                        <td className="songJacket"><img class="rounded" src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/></td>
                        <td className="songArtist">モリモリあつし</td>
                        <td className="songTitle">PUPA</td>
                        <td className="songGame"><img src="https://remywiki.com/images/thumb/6/61/SDVX_IV_HEAVENLY_HAVEN.png/400px-SDVX_IV_HEAVENLY_HAVEN.png"/></td>
                      </tr>

                      <tr className="border-top">
                        <td className="songNumber">2</td>
                        <td className="songJacket"><img class="rounded" src="https://remywiki.com/images/thumb/3/3c/Innocent_Tempest.png/200px-Innocent_Tempest.png"/></td>
                        <td className="songArtist">Diceros Bicornis</td>
                        <td className="songTitle">Innocent Tempest</td>
                        <td className="songGame"><img src="https://remywiki.com/images/thumb/c/c8/SDVX_II_-infinite_infection-.png/400px-SDVX_II_-infinite_infection-.png"/></td>
                      </tr>

                      <tr className="border-top">
                        <td className="songNumber">3</td>
                        <td className="songJacket"><img class="rounded" src="https://remywiki.com/images/thumb/7/7a/TWO-TORIAL_MXM.png/200px-TWO-TORIAL_MXM.png"/></td>
                        <td className="songArtist">PHQUASE vs DJ TOTTO</td>
                        <td className="songTitle">TWO-TORIAL</td>
                        <td className="songGame"><img src="https://remywiki.com/images/thumb/6/61/SDVX_IV_HEAVENLY_HAVEN.png/400px-SDVX_IV_HEAVENLY_HAVEN.png"/></td>
                      </tr>

                      <tr className="border-top">
                        <td className="songNumber">4</td>
                        <td className="songJacket"><img class="rounded" src="https://remywiki.com/images/thumb/e/e0/Black_night.png/200px-Black_night.png"/></td>
                        <td className="songArtist">Noah</td>
                        <td className="songTitle">Black Night</td>
                        <td className="songGame"><img src="https://remywiki.com/images/thumb/6/61/SDVX_IV_HEAVENLY_HAVEN.png/400px-SDVX_IV_HEAVENLY_HAVEN.png"/></td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
        )
    }
}

export default UserSongList //Export this component