import React from 'react'
import './css/users.css'

class UsersPage extends React.Component {
  render() {
    return (
      <div>
        <div className="userFilters mt-3">
          <form>
            <input type="text" className="form-control w-75 mx-auto" id="searchUser" name="searchUser" placeholder="Search for Users"/>
            <button type="button" className="btn btn-primary btn-block w-50 mx-auto mt-3" id="searchButton" name="searchButton">Search</button>
          </form>

          <hr className="w-75"/>
        </div>
        <div className="users-table border rounded border-secondary mt-3 shadow">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Scores Posted</th>
                <th scope="col">Songs Added</th>
                <th scope="col">Total Goals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>[ Scarlet Red ]</td>
                <td>237</td>
                <td>157</td>
                <td>17</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Necross</td>
                <td>154</td>
                <td>26</td>
                <td>10</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Malikil</td>
                <td>123</td>
                <td>11</td>
                <td>4</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>[ Scarlet Red ]</td>
                <td>237</td>
                <td>157</td>
                <td>17</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Necross</td>
                <td>154</td>
                <td>26</td>
                <td>10</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Malikil</td>
                <td>123</td>
                <td>11</td>
                <td>4</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>[ Scarlet Red ]</td>
                <td>237</td>
                <td>157</td>
                <td>17</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Necross</td>
                <td>154</td>
                <td>26</td>
                <td>10</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Malikil</td>
                <td>123</td>
                <td>11</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default UsersPage
