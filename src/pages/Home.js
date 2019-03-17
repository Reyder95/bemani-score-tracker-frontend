import React from 'react'; //Import react
import Footer from '../components/global/Footer'//Import the Footer component
import BodyContent from '../components/home/BodyContent' //Import the BodyContent component


class Home extends React.Component {
    render() {
        return (
            <div>
                <img className="landing-image" src="https://placehold.it/1920x600/100" />
                <BodyContent />
                <Footer />
            </div>
        )
    }
}

export default Home //Export this component