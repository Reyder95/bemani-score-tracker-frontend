import React from 'react'
import ChartRenderer from './ChartRenderer'

class GlobalSongListEntries extends React.Component {


  render() {
    return (
      <tr className="border-bottom">
        <td className="gsl-number"><div>{this.props.song.id}</div></td>
        <td className="globalSongJacket"><div><img className="rounded" src={this.props.song.jacketlink}/></div></td>
        <td className="gsl-artist"><div>{this.props.song.artist}</div></td>
        <td className="gsl-title"><div>{this.props.song.title}</div></td>
        <td className="gsl-game"><div>{this.props.song.gameversion}</div></td>
        <td className="gsl-levels pb-3 pt-3">
          <div>
            {this.props.song.charts.map(item => (<ChartRenderer chart={item}/>))}
          </div>
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
