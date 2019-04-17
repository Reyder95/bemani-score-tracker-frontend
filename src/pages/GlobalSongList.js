import React from 'react'
import GlobalSongListFilters from '../components/global-song-list/GlobalSongListFilters'
import './css/global-song-list.css'


class GlobalSongList extends React.Component {
    render() {
        return(
            <div className="componentGlobalSongList">

              <GlobalSongListFilters />
              <div className="global-song-content p-3 mt-5">
                <table>
                  <thead>
                    <tr className="border-bottom border-secondary">
                      <th>#</th>
                      <th className="globalSongJacket">Jacket</th>
                      <th>Artist</th>
                      <th>Title</th>
                      <th>Game</th>
                      <th>Difficulties</th>
                      <th className="globalSongAdd">Add the Song</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-bottom">
                      <td>1</td>
                      <td className="globalSongJacket"><img className="rounded" src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/></td>
                      <td>Morimori Atsushi</td>
                      <td>PUPAasdasdasdasd</td>
                      <td>SOUND VOLTEX IV: HEAVENLY HAVEN</td>
                      <td>MXM 18 | EXH 16 | ADV 12 | NOV 6</td>
                      <td className="globalSongAdd">
                        <form>
                          <select name="songAddDropdown">
                            <option value="" selected disabled hidden>Add To Collection...</option>
                          </select>
                        </form>
                      </td>
                    </tr>

                    <tr className="border-bottom">
                      <td>2</td>
                      <td className="globalSongJacket"><img className="rounded" src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/></td>
                      <td>Morimori Atsushi</td>
                      <td>PUPAasdasdasdasd</td>
                      <td>SOUND VOLTEX IV: HEAVENLY HAVEN</td>
                      <td>MXM 18 | EXH 16 | ADV 12 | NOV 6</td>
                      <td className="globalSongAdd">
                        <form>
                          <select name="songAddDropdown">
                            <option value="" selected disabled hidden>Add To Collection...</option>
                          </select>
                        </form>
                      </td>
                    </tr>

                    <tr className="border-bottom">
                      <td>2</td>
                      <td className="globalSongJacket"><img className="rounded" src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/></td>
                      <td>Morimori Atsushi</td>
                      <td>PUPAasdasdasdasd</td>
                      <td>SOUND VOLTEX IV: HEAVENLY HAVEN</td>
                      <td>MXM 18 | EXH 16 | ADV 12 | NOV 6</td>
                      <td className="globalSongAdd">
                        <form>
                          <select name="songAddDropdown">
                            <option value="" selected disabled hidden>Add To Collection...</option>
                          </select>
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
        )
    }
}

export default GlobalSongList;