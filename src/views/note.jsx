import React from 'react'
import uuid from 'node-uuid'

export default class note extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      note: {
        title: 'Note',
        details: [
          '这是一些简单的小DEMOS：',
          '1、“2D幻灯-JS”是一个很常规的JS幻灯片；',
          '2、“3D幻灯-CSS”在CSS3 animation的基础上，使用CSS3 transform 3D变换实现的幻灯片；',
          '3、“3D幻灯-JS”通过JS控制六面体的3D变换（根据鼠标位置相应地转动）；',
          '4、“彩带”代码借鉴自VueJS作者的博客',
          '5、该SPA所有图片均来自网络，版权归原作者所有。',
          '6、为获得较好的视觉体验，请使用新版Chrome浏览器查看该SPA。'
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
