import React, { Component } from 'react'
import { Timeline} from 'antd'

import { fetchReops } from '../../utils/fetchGithub'

import './index.css'

export default class Project extends Component {
    constructor(props) {
      super(props)
      this.state = {
        repos: []
      }
    }
    componentWillMount() {
      fetchReops('Yan1')
        .then(result => {
            this.setState({
              repos: result.data
            })
            console.log(this.state.repos)
        })
    }

    getTimelineItems = repos => {
      return repos.map(repo => (
        <Timeline.Item key={repo.id}>
            <div><a href={ repo.url }>{ repo.description }</a></div>
        </Timeline.Item>
      ))
    }
    render() {
        return(
            <div className="project">
                <h1 className="project-title">我的项目经验</h1>
                <div className="project-content">
                <Timeline>
                  { this.getTimelineItems(this.state.repos) }
                </Timeline>
                </div>
            </div>
        )
    }
}
