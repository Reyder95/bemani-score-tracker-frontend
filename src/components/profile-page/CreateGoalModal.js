import React from 'react'

class CreateGoalModal extends React.Component {
  render() {
    return (
      <div>
        <div className="clearfix">
          <button type="button" data-toggle="modal" data-target="#createGoalModal" className="float-right w-10 mt-4 btn btn-primary">Add Goal</button>
        </div>

        <div className="modal fade" id="createGoalModal" tabindex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createGoalModalLabel">Create Goal</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="goalDescription">Description</label>
                    <textarea className="form-control"></textarea>
                  </div>

                  <div className="form-group">
                    <label for="goalType">Goal Type</label>
                    <select className="form-control">
                      <option value="clear">Clear</option>
                      <option value="score">Score</option>
                      <option value="uc">UC</option>
                      <option value="puc">PUC</option>
                      <option value="custom">Custom (not fully implemented correctly)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="goalThreshold">Threshold</label>
                    <input className="form-control" type="text"></input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Add Goal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateGoalModal
