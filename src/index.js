import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick'
import 'antd/dist/antd.css';
import Route from './router'
import { Provider } from 'react-redux'
import store from './store'
import './config/rem'
import reportWebVitals from './reportWebVitals';
import { themes, ThemeContext } from "./theme/theme-context";
FastClick.attach(document.body)

let ThemeData = {
  theme: themes.light,
  toggleTheme: toggleTheme,
}

function toggleTheme() {
  ThemeData = {
    theme: ThemeData.theme === themes.dark ?
      themes.light : themes.dark
  }
}
 
// const render = Component => {
//   ReactDOM.render(
//     <ThemeContext.Provider value={ThemeData}>
//       <Provider store={store}>
//         <React.StrictMode>
//           <Component />
//         </React.StrictMode>
//       </Provider>
//     </ThemeContext.Provider>
//     ,
//     document.getElementById('root')
//   )
// }



function render(Component) {
  return ReactDOM.render(
    <ThemeContext.Provider value={ThemeData}>
      <Provider store={store}>
        <React.StrictMode>
          <Component />
        </React.StrictMode>
      </Provider>
    </ThemeContext.Provider>
    ,
    document.getElementById('root')
  )
}

render(Route)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 