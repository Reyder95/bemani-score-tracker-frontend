import React from 'react'
import './css/songs-page.css'
import NoviceTable from '../components/songs-page/NoviceTable'
import AdvancedTable from '../components/songs-page/AdvancedTable'
import ExhaustTable from '../components/songs-page/ExhaustTable'
import MaximumTable from '../components/songs-page/MaximumTable'
import CreateScoreModal from '../components/songs-page/CreateScoreModal'

class SongsPage extends React.Component {

  openScoreboard(tabName, e) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("scoreTabContent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i< tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" scoreActive", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " scoreActive"
  }

    render() {
        return (
            <div className="componentSongsPage">
              <div className="pageHeader">
                <h2 className="mb-2 mt-2">モリモリあつし - PUPA</h2>
                <img className="rounded" src="https://remywiki.com/images/thumb/e/e2/PUPA.png/200px-PUPA.png"/>
              </div>

              <div className="difficultyTab border border-top border-bottom border-secondary mt-3">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <button className="tablinks scoreActive btn btn-primary nov-button rounded-0" onClick={(e) => this.openScoreboard('tabNovice', e)}>NOVICE</button>
                    </div>
                    <div className="col-sm">
                      <button className="tablinks btn btn-primary adv-button rounded-0" onClick={(e) => this.openScoreboard('tabAdvanced', e)}>ADVANCED</button>
                    </div>
                    <div className="col-sm">
                      <button className="tablinks btn btn-primary exh-button rounded-0" onClick={(e) => this.openScoreboard('tabExhaust', e)}>EXHAUST</button>
                    </div>
                    <div className="col-sm">
                      <button className="tablinks btn btn-primary mxm-button rounded-0" onClick={(e) => this.openScoreboard('tabMaximum', e)}>MAXIMUM</button>
                    </div>
                  </div>
                </div>
              </div>

              <CreateScoreModal />


              <div className="scores mt-4">
                <NoviceTable />
                <AdvancedTable />
                <ExhaustTable />
                <MaximumTable />
              </div>
            </div>
        )
    }
}

export default SongsPage;
