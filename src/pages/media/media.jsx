import { Component } from "react";
import { connect } from "react-redux";
import "./media.scss";
import { Row, Col, TreeSelect } from 'antd';
import RenderTreeNode from "../../components/renderTreeNode/renderTreeNode";
import { ThemeContext } from '../../context/theme-context';
import { AuthContext } from "../../context/auth-context";
// import PropTypes from "prop-types";
// import API from "../../api/api";

class media extends Component {
    // static propTypes = {};
    // static contextType = ThemeContext;
    state = {
        checkMediaGroup: undefined,
        mediaGroup: [
            { "groupName": "个人素材组", "flag": 0, "children": null, "update": 1, "uuid": 3 },
            {
                "groupName": "分组1", "flag": 1, "children": [
                    {
                        "groupName": "分组1.1", "flag": 1, "children": [
                            {
                                "groupName": "分组1.1.1", "flag": 1, "children": [
                                    { "groupName": "分组1.1.1.1", "flag": 1, "children": null, "update": 1, "uuid": 13 }], "update": 1, "uuid": 11
                            },
                            { "groupName": "分组1.1.2", "flag": 1, "children": [{ "groupName": "分组1.1.2.1", "flag": 1, "children": null, "update": 1, "uuid": 14 }], "update": 1, "uuid": 12 }], "update": 1, "uuid": 9
                    }, { "groupName": "分组1.2", "flag": 1, "children": null, "update": 1, "uuid": 10 }], "update": 1, "uuid": 8
            }, { "groupName": "分组2", "flag": 1, "children": null, "update": 1, "uuid": 15 }
        ],
    };
    onChange = checkMediaGroup => {
        this.setState({ checkMediaGroup });
    };
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => {
                    return (
                        <div style={{ margin: '16px' }}>
                            <AuthContext.Consumer>
                                {({ user, signin, signout }) => {
                                    return (<div>
                                        <h2>{user}</h2>
                                        <hr />
                                        <button onClick={() => { signin(() => { console.log('登陆cb') }) }}>登陆</button>
                                        <button onClick={signout.bind(this, () => { console.log('退出登录cb') })}>取消登陆</button>
                                    </div>)
                                }}
                            </AuthContext.Consumer>

                            <button onClick={toggleTheme} style={{ color: theme.foreground }}>btn</button>
                            <Row align="middle" gutter={16}>
                                <Col flex="72px" style={{ color: theme.foreground }}>素材分组</Col>
                                <Col flex="auto">
                                    <TreeSelect
                                        showSearch
                                        style={{ width: '100%' }}
                                        value={this.state.checkMediaGroup}
                                        placeholder="请选择素材库分组"
                                        allowClear
                                        onChange={this.onChange}
                                    >
                                        {RenderTreeNode(this.state.mediaGroup)}
                                    </TreeSelect>
                                </Col>
                            </Row>
                        </div>
                    )
                }}

            </ThemeContext.Consumer>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(media);
