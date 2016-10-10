import React from 'react'
import {Link} from 'react-router'

export default class appHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menus: [
        {
          title: '2d幻灯-JS',
          url: 'slider-2d-js'
        },
        {
          title: '3d幻灯-CSS',
          url: 'slider-3d-css'
        },
        {
          title: '3d幻灯-JS',
          url: 'slider-3d-js'
        }
      ]
    }
  }
  render () {
    const lis = this.state.menus.map(item => {
      return (
        <li className="li" key={item.url}>
          <Link to={`/${item.url}`}>{item.title}</Link>
        </li>
      )
    })
    return (
      <header className="app-header">
        <nav className="nav">
          <ul className="ul">
            {lis}
            <li className="item">
              <a href="#" className="title">说明及其他</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
