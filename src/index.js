import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick'
import 'antd/dist/antd.css';
import Route from './router'
import { Provider } from 'react-redux'
import store from './store'
import './config/rem'
import reportWebVitals from './reportWebVitals';
import { themes, ThemeContext } from "./context/theme-context";


FastClick.attach(document.body)

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Provider store={store}>
          <React.StrictMode>
            <Route />
          </React.StrictMode>
        </Provider>
      </ThemeContext.Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 