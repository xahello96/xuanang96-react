import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const error = asyncComponent(() => import("../pages/error/error"))
const media = asyncComponent(() => import("../pages/media/media"))
const userinfo = asyncComponent(() => import("../pages/userinfo/userinfo"))

class RouteConfig extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/userinfo' />
                    <Route path="/userinfo" exact component={userinfo} />
                    <Route path="/media" exact component={media} />
                    <Route component={error} />
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteConfig