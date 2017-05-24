import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { Link, NavLink } from 'react-router-dom'

import { getUserInfo } from '../../utils/getInfo'
import { fetchReops } from '../../utils/fetchGithub'

import './index.css'

export default class NavMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  getMenuItems(data) {
    const { collapse } = this.props;

    return data.map(item => (
      <Menu.Item key={ item.name }>
        <NavLink to={ item.name === 'home' ? '/' : `/${item.name}` }>
          <i className={ item.name === 'home' ? 'iconfont icon-index' : `iconfont icon-${item.name}`}></i>
          { !collapse && <span className="nav-text">{ item.desc }</span> }
        </NavLink>
      </Menu.Item>
    ))
  }
  componentWillMount() {
    getUserInfo('admin')
      .then(result => {
        this.setState({
          name: result.data.name
        })
      })
  }
  render() {
    // 此处pathname也可以通过 contextTypes来获得，但由于父组件中已经用到，则直接传递过来
    const { collapse, handleCollapse, pathname } = this.props;
    console.log(this.state.name)
    const data = [
      {name: 'home', desc: '首页'},
      {name: 'skill', desc: '工作技能'},
      {name: 'project', desc: '项目经验'},
      {name: 'contact', desc: '联系我'},
      {name: 'about', desc: '关于我'}
    ]
    return(
      <aside className={ collapse ? 'layout-aside layout-aside-collapse' : 'layout-aside'}>
        <div className={ collapse ? 'layout-logo layout-logo-collapse' : 'layout-logo'}>
          <i className="iconfont icon-jianli logo"></i>
          <span className="title-text">{ this.state.name }</span>
        </div>
        <Menu mode="inline"
          theme="dark"
          defaultSelectedKey={["home"]}
          selectedKeys={[pathname || 'home']}>
          { this.getMenuItems(data) }
        </Menu>
        <div className={ collapse ? 'aside-action aside-action-collapse' : 'aside-action'} onClick={ handleCollapse }>
          <Icon type={ collapse ? 'left' : 'right'} />
        </div>
      </aside>
    )
  }
}
