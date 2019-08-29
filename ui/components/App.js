import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Pages from '../containers/Pages'
import Header from './App/Header'
import styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className={styles['content']}>
            <Switch>
              <Route path="/pages" component={Pages} />
              <Route path="/" component={Home} />
            </Switch>
            </div>
        </div>
      </div>
    )
  }
}

export default App
