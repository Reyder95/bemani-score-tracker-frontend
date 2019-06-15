import React from 'react'

class ChartRenderer extends React.Component {

  render() {
    return (
      <p>{this.props.chart.diff_abbreviated + " " + this.props.chart.level}</p>
    )
  }

}

export default ChartRenderer;
