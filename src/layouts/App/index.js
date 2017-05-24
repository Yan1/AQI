import React, { Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PropTypes from 'prop-types'
import createHistory from 'history/createBrowserHistory'

import NavMenu from '../NavMenu'

import './index.css'

export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        collapse: false,
        pathname: 'home'
      }
    }

    handleCollapse = () => {
      this.setState({
        collapse: !this.state.collapse
      })
      console.log(this.state.collapse)
    }
    // componentDidUpdate(prevProps, prevState) {
    //   const pathname = this.context.router.history.location.pathname.substring(1)
    //   if(pathname !== prevState.pathname) {
    //     this.setState({
    //       pathname: pathname
    //     })
    //   }
    // }
    render() {
        console.log(this)
        const pathname = this.context.router.history.location.pathname.substring(1);
        const collapse = this.state.collapse;
        return(
            <div>
                <NavMenu collapse={collapse} pathname={ pathname } handleCollapse={ this.handleCollapse } />
                <div className={ collapse ? 'main main-collapse' : 'main'}>
                    <ReactCSSTransitionGroup
                        className="app"
                        component="div"
                        transitionName="app"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        <div className="content" key={pathname}>
                            { this.props.children }
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}
App.contextTypes = {  // 加上此句，会将App中加上router对象
    router: PropTypes.object.isRequired
}

//
//App.propTypes = {
//    match: PropTypes.object.isRequired,
//    location: PropTypes.object.isRequired,
//    history: PropTypes.object.isRequired,
//    path: PropTypes.string.isRequired
//}
