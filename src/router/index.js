import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
import { AuthContext } from "../context/auth-context";
import API from "../api/api";

import Server from "../api/server";

const error = asyncComponent(() => import("../pages/error/error"))
const media = asyncComponent(() => import("../pages/media/media"))
const userinfo = asyncComponent(() => import("../pages/userinfo/userinfo"))
const example = asyncComponent(() => import("../pages/test/example"))

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

// class PrivateRoute extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//     }
//     static contextType = AuthContext;
//     render() {
//         return (
//             <div>
//                 <h4>{this.context.user ? this.context.user : '未登录'}</h4>
//                 <AuthContext.Consumer>
//                     {({ signin, signout }) => {
//                         return (<div>
//                             <button onClick={() => { signin(() => { }) }}>登陆</button>
//                             <button onClick={signout.bind(this, () => { })}>取消登陆</button>
//                         </div>)
//                     }}
//                 </AuthContext.Consumer>
//             </div>
//         )
//     }
// }

class RouteConfig extends Component {
    constructor(props) {
        super(props);
        this.signin = cb => {
            return fakeAuth.signin(() => {
                this.setState({
                    user: 'user'
                })
                cb();
            });
        };
        this.signout = cb => {
            return fakeAuth.signout(() => {
                this.setState({
                    user: null
                })
                cb();
            });
        };
        this.state = {
            user: null,
            signin: this.signin,
            signout: this.signout,

            enterpriseUuid: null
        };
    }
    componentDidMount() {
        this.getEnterpriseUuid()
    }
    getEnterpriseUuid = async () => {
        console.log(2)
        const enterpriseUuid = await API.getEnterpriseUuid();
        this.setState({ enterpriseUuid })
    }
    render() {
        return (
            <AuthContext.Provider value={this.state}>
                <Server>
                    <HashRouter>
                        <Switch>
                            <Redirect exact from='/' to='/userinfo' />
                            <Route path="/userinfo" exact component={userinfo} />
                            <Route path="/media" exact component={media} />
                            <Route path="/example" exact component={example} />
                            {/* <PrivateRoute path="/test"></PrivateRoute> */}
                            <Route component={error} />
                        </Switch>
                    </HashRouter>
                </Server>
            </AuthContext.Provider>
        )
    }
}

export default RouteConfig