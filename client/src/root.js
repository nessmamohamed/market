import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store'
import{ getItems } from './actions/itemAction'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class Root extends React.Component{   
    componentDidMount(){
        store.dispatch(getItems())
      }
  render(){
     
      return(
          <Provider store = {store}>
              <div>
                
                <Router>
                    <Route exact={true} path='/market' component = {App} />
                    
                </Router>
     
               
               </div>
          </Provider>
          
      )
  }
}