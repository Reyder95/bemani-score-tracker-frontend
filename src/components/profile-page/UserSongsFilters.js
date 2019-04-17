import React from 'react'

class UserSongsFilters extends React.Component {
    render() {
      return(
        <div className="componentUserSongsFilters mb-5 border border-secondary rounded p-3">
          <form>

            <div className="form-group">
              <input type="text" className="form-control" id="search-box" placeholder="Search For Songs In Collection"/>
            </div>
            
            <div className="select-flex-container">     
              <div className="form-group">
                <select className="form-control" id="collectionSelect">
                  <option value="" selected disabled hidden>Select A Collection</option>
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" id="levelSelect">
                  <option value="" selected disabled hidden>Select A Level</option>
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" id="gameSelect">
                  <option value="" selected disabled hidden>Select A Game</option>
                </select>
              </div>
            </div>

            <div className="input-buttons-flex">
              <input type="submit" className="btn btn-primary mt-3" value="Search"/>
              <input type="submit" className="btn btn-danger mt-3" value="Reset" />
            </div>

          </form>
        </div>
      )
    }
}

export default UserSongsFilters;