import React from 'react'

class InfoTile extends React.Component {

    render() {
        return (
            <div className="information-container">
                <h2>{this.props.title}</h2>
                <hr className="border-secondary" />
                <img src={this.props.imageSource} align="right" />
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}

export default InfoTile;