import React from 'react'
import { Router, Route, HashRouter, Switch, BrowserRouter } from 'react-router-dom'

import App from '../layouts/App'

import Skill from '../containers/Skill'
import Contact from '../containers/Contact'
import About from '../containers/About'
import Project from '../containers/Project'
import Home from '../containers/Home'

export default (
    <HashRouter>
        <App>
            <Switch>
                <Home path="/" exact component={Home} />
                <Skill path="/skill" exact component={Skill} />
                <Contact path="/contact" exact component={Contact} />
                <About path="/about" exact component={About} />
                <Project path="/project" exact component={Project} />
            </Switch>
        </App>
    </HashRouter>
)
