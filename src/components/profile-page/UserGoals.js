import React from 'react'
import UserGoalsFilters from './UserGoalsFilters'
import CreateGoalModal from './CreateGoalModal'

class UserGoals extends React.Component {
    render() {
        return (
            <div className="tabcontent componentUserGoals" id="tabGoals">

              <UserGoalsFilters />
              <div className="goals-content border border-secondary rounded p-4">
                <table>
                  <tr>
                    <thead>
                      <tr>
                        <th className="goalDate">Date Set</th>
                        <th className="goalDescription">Description</th>
                        <th className="goalCount">Chart Count</th>
                        <th className="goalType">Type</th>
                        <th className="goalStatus">Status</th>
                        <th className="goalProgress">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-top">
                        <td className="goalDate"><a href="#" className="stretched-link" role="button" data-toggle="modal" data-target="#goal232">March 22, 2019</a></td>
                        <td className="goalDescription"><a href="#" className="stretched-link" role="button" data-toggle="modal" data-target="#goal232">I've been trying to fully clear these charts for months! It's about time I decide to stop fucking around and get to it.</a></td>
                        <td className="goalCount"><a href="#" className="stretched-link" role="button" data-toggle="modal" data-target="#goal232">4</a></td>
                        <td className="goalType"><a href="#" className="stretched-link" role="button" data-toggle="modal" data-target="#goal232">Score</a></td>
                        <td className="goalStatus"><a href="#" className="stretched-link" role="button" data-toggle="modal" data-target="#goal232">INCOMPLETE</a></td>
                        <td className="goalProgress">
                          <a href="#" className="stretched-link" role="button" data-toggle="modal" data-target="#goal232">
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                            </div>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </tr>
                </table>

                <div className="modal fade" id="goal232" tabindex="-1" role="dialog" aria-labelledby="goal232" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="goal232">Goal #232</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p><strong>Date Set:</strong> March 22, 2019</p>
                        <p><strong>Description:</strong></p>
                        <p>I've been trying to fully clear these charts for months! It's about time I decide to stop fucking around and get to it.</p>
                        <p><strong>Type:</strong> Clear</p>
                        <p><strong>Status:</strong> INCOMPLETE</p>
                        <p><strong>Threshold:</strong> 9,700,000 / 9,900,000</p>
                        <p><strong>Progress:</strong></p>
                        <div class="progress">
                              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}></div>
                            </div>
                        <hr />
                        <h3>Charts</h3>
                        <hr />
                        <div className="row mb-3">
                          <div className="col-sm">
                            <img src="https://placehold.it/100/100" className="rounded" />
                            EXHAUST 18
                          </div>

                          <div className="col-sm">
                            <img src="https://placehold.it/100/100" className="rounded" />
                            EXHAUST 18
                          </div>

                          <div className="col-sm">
                            <img src="https://placehold.it/100/100" className="rounded" />
                            EXHAUST 18
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm">
                            <img src="https://placehold.it/100/100" className="rounded" />
                            EXHAUST 18
                          </div>

                          <div className="col-sm">
                          </div>

                          <div className="col-sm">
                          </div>
                        </div>

                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CreateGoalModal/>
            </div>
        )
    }
}

export default UserGoals
