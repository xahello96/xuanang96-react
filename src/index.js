import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick'
import './index.css';
import 'antd/dist/antd.css';
import Route from './router'
import { Provider } from 'react-redux'
import store from './store'
import './config/rem'

import reportWebVitals from './reportWebVitals';

FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
  )
}

render(Route)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 