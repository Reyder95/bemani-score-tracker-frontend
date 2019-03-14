import React from 'react'

class InfoTile extends React.Component {

    render() {
        return (
            <div className="information-container">
            {/*
                Any property obtained in a component gets sent to the class/function for that component
                as a "props". So to call and return said property, you do "this.props.<name-of-prop>".
                For functions it's a bit different as you get a parameter named prop, or whatever you name it,
                and you simply do prop.<name-of-prop>.
            */}
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