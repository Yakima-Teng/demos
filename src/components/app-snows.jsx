import React from 'react'

export default class appSnows extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      snowsNumber: 100
    }
  }
  render () {
    const snows = this.generateSnows().map(item => {
      const style = {
        animationDelay: `${-item * 100}ms`,
        left: `${100 * Math.random()}%`
      }
      return <div className="snow" key={item} style={style}></div>
    })
    return (
      <div className="app-snows">{snows}</div>
    )
  }
  generateSnows () {
    let tempArr = []
    for (let i = 0; i < this.state.snowsNumber; i++) {
      tempArr.push(i)
    }
    return tempArr
  }
}
