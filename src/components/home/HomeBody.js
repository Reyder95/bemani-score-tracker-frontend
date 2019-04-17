import React from 'react' //Import react
import InfoTile from './InfoTile' //Import the InfoTile component
import SupportedGames from './SupportedGames' //Import the SupportedGames component

class HomeBody extends React.Component {
    
    //This is the main content for the home page

    render() {
        return (
            <div className="componentHomeBody">

                {/*
                    The InfoTile component is a component that allows for the displaying
                    of various information about the website on the front page.
                */}
                
                <InfoTile 
                title="What is Bemani Score Tracker?"
                imageSource="https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/WPVG_icon_2016.svg/1024px-WPVG_icon_2016.svg.png"
                description={[<strong>Bemani Score Tracker</strong>, " is a system created for rhythm gamers to neatly organize " +
                "their scores, play, and progress over their playtime. With various features to help manage scores and create / " +
                "accomplish goals. This site will always be evolving, so don't hesitate to check the ", <a href="#">Changelog</a>, 
                " for the latest updates!"]}
                />

                <InfoTile
                title="Add Music"
                imageSource="https://static.thenounproject.com/png/17849-200.png"
                description={["Check out the ", <a href="#">Global Song List</a>, " for your respective game! Every song completely " + 
                "up-to-date is able to be added to your profile. Build collections of music and view others' collections of music. " +
                "All music that you add to your profile will be eligible for placing scores on!"]}
                />

                <InfoTile
                title="Upload Scores"
                imageSource="http://chittagongit.com//images/score-icon-png/score-icon-png-11.jpg"
                description={["With ", <strong>Bemani Score Tracker</strong>, ", you can upload all the scores you'd like to songs " +
                "you have added to your list. Create local leaderboards per charts that you want to play. Everytime you submit a score " + 
                "to a chart, it gets displayed in your local leaderboard for that particular chart! Sort through leaderboards based on " +
                "score or location, and view other players' scores!"]}
                />

                <InfoTile
                title="Track Goals"
                imageSource="https://cdn4.iconfinder.com/data/icons/business-and-office-line-vol-6/52/Success__goals__achievement__aim-512.png"
                description={["We even have a built in goal tracker that you can use to help improve yourself! Place a very specific goal " +
                "on a chart or give yourself a broad over time goal. Having trouble but determined to get that song cleared? Make it a goal, " +
                "and document your progress! Keep placing scores, and your scores will update in real time."]}
                />

                <InfoTile
                title="Help Us Help You!"
                imageSource="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/confirmation_verification-512.png"
                description={["Have a really neat idea you want to see? Found a bug that is really annoying and should be fixed? No problem! " +
                "Head over to our ", <a href="#">Github</a>, " and submit an issue! We love hearing from the community and implementing things " + 
                "that the community wants, so we're more than happy to listen!"]}
                />

                <SupportedGames />     
            </div>
        )
    }

}

export default HomeBody