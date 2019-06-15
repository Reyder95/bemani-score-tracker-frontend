import React from 'react'
import {Link} from 'react-router-dom'
import GlobalSongListEntries from '../components/global-song-list/GlobalSongListEntries'
import './css/global-song-list.css'
import _ from 'lodash'


class GlobalSongList extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        items: [],
        page: 1,
        entries: 10,
        search: '',
        level: '',
        game: ''
      }

      this.refreshPage = this.refreshPage.bind(this);

      this.delayedCallback = _.debounce(this.handleSearchChange, 800);
      this.handleLevelChange = this.handleLevelChange.bind(this);
      this.handleGameChange = this.handleGameChange.bind(this);

    }

    fetchApi(page, entries, search, level, game) {
      search = search.replace(' ', '%20');
      search = search.replace(/\s+/g, "");

      console.log(`http://127.0.0.1:1337/api/v1/get_songs?p=${ page }&e=${ entries }&s=${ search }&l=${ level }&g=${ game }`);

      fetch(`http://127.0.0.1:1337/api/v1/get_songs?p=${ page }&e=${ entries }&s=${ search }&l=${ level }&g=${ game }`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
    }

    componentDidMount() {
      this.fetchApi(this.state.page, this.state.entries, '', '', '');
    }

    handleLevelChange(event) {
      var value = event.target.value;
      this.setState({level: value});
      this.fetchApi(this.state.page, this.state.entries, this.state.search, value, this.state.game);
    }

    handleSearchChange(event) {
      const value = event.target.value;

      console.log("In Function: " + event.target.value)
      this.setState({search: value});
      this.fetchApi(this.state.page, this.state.entries, value, this.state.level, this.state.game);
    }

    handleGameChange(event) {
      var value = event.target.value;
      this.setState({game: value});
      this.fetchApi(this.state.page, this.state.entries, this.state.search, this.state.level, value);
    }

    refreshPage(next) {

      var page = this.state.page;

      if (next)
      {
        this.setState({
          page: this.state.page + 1
        });
        page = page + 1;
      }
      else
      {
        this.setState ({
          page: this.state.page - 1
        });
        page = page - 1;
      }

      this.fetchApi(page, this.state.entries, this.state.search, this.state.level, this.state.game  );
    }

    onChange(event) {
      event.persist();
      this.delayedCallback(event);
    }

    render() {

        return(
            <div className="componentGlobalSongList">

            <div className="componentGlobalSongListFilters mb-5 mt-3 border border-secondary rounded p-3">
              <form>

                <div className="form-group">
                  <input onChange={this.onChange.bind(this)} type="text" className="form-control" id="search-box" ref="searchBox" placeholder="Search For Songs In Collection"/>
                </div>

                <div className="select-flex-container">

                  <div className="form-group">
                    <select className="form-control" onChange={this.handleLevelChange} id="levelSelect">
                      <option value="" selected disabled hidden>Select A Level</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">110</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <select onChange={this.handleGameChange} className="form-control" id="gameSelect">
                      <option value="" selected disabled hidden>Select A Game</option>
                      <option value="SOUND%20VOLTEX%20I:%20BOOTH">SOUND VOLTEX I: BOOTH</option>
                      <option value="SOUND%20VOLTEX%20II:%20INFINITE%20INFECTION">SOUND VOLTEX II: INFINITE INFECTION</option>
                      <option value="SOUND%20VOLTEX%20III:%20GRAVITY%20WARS">SOUND VOLTEX III: GRAVITY WARS</option>
                      <option value="SOUND%20VOLTEX%20IV:%20HEAVENLY%20HAVEN">SOUND VOLTEX IV: HEAVENLY HAVEN</option>
                    </select>
                  </div>
                </div>

                <div className="input-buttons-flex">
                  <input className="btn btn-primary mt-3" value="Search"/>
                  <input type="submit" className="btn btn-danger mt-3" value="Reset" />
                </div>

              </form>
            </div>

              <div className="navigator text-center">
                <button onClick={() => this.refreshPage(false)} className="btn btn-primary mx-4">Previous</button>
                <button onClick={() => this.refreshPage(true)} className="btn btn-primary mx-4">Next</button>
              </div>
              <div className="global-song-content p-3 mt-5">
                <table className="h-100">
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

                    {this.state.items.map(item => (

                      <GlobalSongListEntries
                      song={item}
                      />
                    )
                  )}
                  </tbody>
                </table>
              </div>

              <div className="navigator text-center">
                <button onClick={() => this.refreshPage(false, '', '', '')} className="btn btn-primary mx-4">Previous</button>
                <button onClick={() => this.refreshPage(true, '', '', '')} className="btn btn-primary mx-4">Next</button>
              </div>

              <br />
              <br />
            </div>
        )
    }
}

export default GlobalSongList;
