import React from 'react'; //Import react
import { withRouter } from 'react-router-dom';
import './css/index.css'
import Footer from '../components/global/Footer'//Import the Footer component
import HomeBody from '../components/home/HomeBody' //Import the BodyContent component

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/songs/id') }}
  >
    Click Me!
  </button>
))

class Home extends React.Component {
    render() {
        return (
            <div>
              <div class="jumbotron rounded-0">
                <h1 class="display-4">Welcome to Bemani Score Tracker</h1>
                <p class="lead">Read below for information on the project!</p>
                <p class="lead">Otherwise, click the button to sign up!</p>
                <a class="btn btn-primary btn-lg mt-3" href="#" role="button">Sign Up!</a>
              </div>
              <Button/>
                <HomeBody />
                <Footer />
            </div>
        )
    }
}

export default Home //Export this component