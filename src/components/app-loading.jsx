import React from 'react'

export default class appLoading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }
  render () {
    return (
      <div className={'app-loading' + (this.state.isLoading ? '' : ' fade-out')}>
        <div className="inner">
          <i className="fa fa-spinner fa-pulse fa-5x"></i>
        </div>
      </div>
    )
  }
}
