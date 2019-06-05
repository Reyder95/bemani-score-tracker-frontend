import React from 'react'
import {Link} from 'react-router-dom'
import GlobalSongListFilters from '../components/global-song-list/GlobalSongListFilters'
import GlobalSongListEntries from '../components/global-song-list/GlobalSongListEntries'
import './css/global-song-list.css'


class GlobalSongList extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        items: []
      }
    }

    componentDidMount() {
      fetch('http://127.0.0.1:1337/api/songs?p=1&e=10')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
    }
    render() {
      var items = this.state.items;

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

                    {items.map(item => (

                      <GlobalSongListEntries
                      song={item}
                      />
                    )
                  )}
                  </tbody>
                </table>
              </div>

            </div>
        )
    }
}

export default GlobalSongList;
