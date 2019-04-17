import React from 'react'

class CreateScoreModal extends React.Component {
  render() {
    return (
      <div>
        <div className="button-div">
          <button type="button" data-toggle="modal" data-target="#createScoreModal" className="btn-block mt-4 btn btn-primary">Add Score</button>
        </div>

        <div className="modal fade" id="createScoreModal" tabindex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createScoreModal">Add Score</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="scoreValue">Score*</label>
                    <input type="text" className="form-control"/>
                  </div>

                  <div className="form-group">
                    <label for="scoreClearType">Clear Type*</label>
                    <select className="form-control">
                      <option value="" selected disabled>Select a clear type</option>
                      <option value="clear">Clear</option>
                      <option value="hardclear">Hard Clear</option>
                      <option value="uc">UC</option>
                      <option value="puc">PUC</option>
                      <option value="fail">Fail</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <p>
                      <label for="scorePercentage">Percentage</label>
                    </p>
                    <input type="text"className="form-control w-25 d-inline"/>
                    <label className="d-inline"> %</label>
                  </div>

                  <div className="form-group">
                    <label for="scoreLocationDropdown">Location*</label>
                    <select className="form-control">
                      <option value="" selected disabled>Select a location</option>
                      <option value="ksm">K-Shoot Mania</option>
                      <option value="usc">Unnamed SOUND VOLTEX Clone</option>
                      <option value="other">Other...</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="scoreLocationInput">Other Location (only fill this out if you select "other" previously)</label>
                    <input type="text" className="form-control"/>
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Add Score</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateScoreModal
