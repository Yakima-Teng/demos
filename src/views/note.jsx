import React from 'react'
import uuid from 'node-uuid'

export default class note extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      note: {
        title: 'Note',
        details: [
          '这是一个简单的进阶教程：',
          '1、“2D幻灯-JS”是一个很常规的JS代码；',
          '2、“3D幻灯-CSS”在CSS3 animation的基础上，使用了CSS3 transform 3D变换；',
          '3、“3D幻灯-JS”中改为由JS控制六面体的3D变换（根据鼠标位置相应地转动）；',
          '4、该SPA所有图片均来自网络，版权归原作者所有。',
          '5、为获得较好的视觉体验，请使用新版Chrome浏览器查看该SPA。'
        ]
      }
    }
  }
  render () {
    const lis = this.state.note.details.map(item => {
      return (
        <li className="li" key={uuid.v4()}>{item}</li>
      )
    })
    return (
      <div className="note">
        <div className="inner">
          <section className="section">
            <h3 className="title">{this.state.note.title}</h3>
            <ul className="ul">{lis}</ul>
          </section>
        </div>
      </div>
    )
  }
}
