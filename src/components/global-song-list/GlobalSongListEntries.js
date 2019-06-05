import React from 'react'
import ChartRenderer from './ChartRenderer'

class GlobalSongListEntries extends React.Component {


  render() {
    return (
      <tr className="border-bottom">
        <td className="gsl-number">{this.props.song.id}</td>
        <td className="globalSongJacket"><img className="rounded" src={this.props.song.jacketlink}/></td>
        <td className="gsl-artist">{this.props.song.artist}</td>
        <td className="gsl-title">{this.props.song.title}</td>
        <td className="gsl-game">{this.props.song.gameversion}</td>
        <td className="gsl-levels pb-3 pt-3">
        {this.props.song.charts.map(item => (<ChartRenderer chart={item}/>))}
        </td>
        <td className="globalSongAdd">
          <form>
            <select name="songAddDropdown">
              <option value="" selected disabled hidden>Add To Collection...</option>
            </select>
          </form>
        </td>
      </tr>
    )
  }
}

export default GlobalSongListEntries;
