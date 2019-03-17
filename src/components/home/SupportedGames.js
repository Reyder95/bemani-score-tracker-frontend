import React from 'react'

class SupportedGames extends React.Component {
    render() {
        return (
            <div className="supported-games">
                <h2>Our Current Plan For Game Support</h2>
                <hr className="border-secondary" />
                <div className="game-images">
                    <img src="https://remywiki.com/images/thumb/2/29/SDVX_VIVID_WAVE.png/400px-SDVX_VIVID_WAVE.png" />
                    <img src="https://remywiki.com/images/thumb/b/b2/IIDX_26_Rootage_logo.png/400px-IIDX_26_Rootage_logo.png" />
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/71/DDR_A_Logo.png" />
                    <span className="stretch"></span>
                </div>
                <p>
                    SOUND VOLTEX is the current priority as our initial game of choice. Following that will be Beatmania IIDX, then DanceDanceRevolution.
                </p>
            </div> 
        )
    }
}

export default SupportedGames