import React from 'react'
import uuid from 'node-uuid'

export default class slider3dJs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
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
      <div className="slider-3d-js">
        <div className="slider">
          // stage for 六面体整体
          <div className="stage-whole">
            <ul className="container-whole">{lis}</ul>
          </div>
        </div>
        <aside className="controls">
          <ul className="ul">
            <li className="li">
              <label htmlFor="rotateX" className="label">RotateX</label>
              <input onChange={this.rotate()} type="number" id="rotateX" className="input" value={this.state.rotateX} />
            </li>
            <li className="li">
              <label htmlFor="rotateY" className="label">RotateY</label>
              <input onChange={this.rotate()} type="number" id="rotateY" className="input" value={this.state.rotateY} />
            </li>
            <li className="li">
              <label htmlFor="rotateZ" className="label">RotateZ</label>
              <input onChange={this.rotate()} type="number" id="rotateZ" className="input" value={this.state.rotateZ} />
            </li>
          </ul>
        </aside>
      </div>
    )
  }
  rotate () {
    console.log(this.state.rotateX)
  }
}
