import React from 'react'

class NoviceTable extends React.Component {
  render() {
    return(
        <div className="componentAdvancedTable scoreTabContent" id="tabAdvanced">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Score</th>
                <th scope="col">Grade</th>
                <th scope="col">Gauge</th>
                <th scope="col">LAMP</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>9,699,150</td>
                <td>AAA</td>
                <td>97%</td>
                <td>Clear</td>
                <td>K-Shoot Mania</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>9,657,188</td>
                <td>AA+</td>
                <td>94%</td>
                <td>Clear</td>
                <td>Cabinet (BWM)</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>9,500,343</td>
                <td>AA+</td>
                <td>35%</td>
                <td>Hard Clear</td>
                <td>Cabinet (BWM)</td>
              </tr>
            </tbody>
          </table>
        </div>
    )
  }
}

export default NoviceTable
