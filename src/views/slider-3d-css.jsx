import React from 'react'
import uuid from 'node-uuid'

export default class appHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images24: [
        {
          url: './static/img/near_1200x800/01.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/02.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/03.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/04.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/05.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/06.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/07.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/08.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/09.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/10.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/11.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/12.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/13.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/14.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/15.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/16.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/01.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/02.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/03.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/04.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/05.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/06.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/07.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/08.jpg',
          title: ''
        }
      ]
    }
  }
  render () {
    let newImages24 = []
    for (let i = 0; i < 6; i++) {
      newImages24.push([
        this.state.images24[4 * i],
        this.state.images24[4 * i + 1],
        this.state.images24[4 * i + 2],
        this.state.images24[4 * i + 3]
      ])
    }
    const lis = newImages24.map(group => {
      return (
        <li className="stage-cover" key={uuid.v4()}>
          <ul className="container-cover">
            {group.map(pic => {
              return (
                <li className="stage-pic" key={uuid.v4()}>
                  <div className="container-pic">
                    <img src={pic.url} alt={pic.title} className="img"/>
                  </div>
                </li>
              )
            })}
          </ul>
        </li>
      )
    })
    return (
      <div className="slider-3d-css">
        // stage for 六面体整体
        <div className="stage-whole">
          <ul className="container-whole">{lis}</ul>
        </div>
      </div>
    )
  }
}
