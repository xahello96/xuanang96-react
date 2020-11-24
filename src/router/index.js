import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const error = asyncComponent(() => import("../pages/error/error"))
const media = asyncComponent(() => import("../pages/media/media"))
const userinfo = asyncComponent(() => import("../pages/userinfo/userinfo"))


export default class RouteConfig extends Component {
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