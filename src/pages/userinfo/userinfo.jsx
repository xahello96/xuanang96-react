import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Input, Button } from 'antd';
import { saveUserInfo } from "../../store/action";

class userinfo extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        saveUserInfo: PropTypes.func.isRequired
    };
    state = {
        name: null,
        age: null
    }
    componentDidMount() {
        this.setState({ name: this.props.userInfo.name })
        this.setState({ age: this.props.userInfo.age })
    }
    submit() {
        this.props.saveUserInfo(this.state)
        this.props.history.push('/info/1996')
    }
    handleInput(type, event) {
        let newState = {}
        newState[type] = event.target.value;
        this.setState(newState)
    }
    render() {
        return (
            <div>
                <h1>userinfo</h1>
                <Input placeholder="your namr" value={this.state.name} onChange={this.handleInput.bind(this, 'name')} />
                <Input placeholder="your age" value={this.state.age} onChange={this.handleInput.bind(this, 'age')} />
                <Button onClick={this.submit}>更改</Button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveUserInfo: (userInfo) => dispatch(saveUserInfo(userInfo)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(userinfo);
