import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Home from './Home'
import Pages from '../containers/Pages/Index'
import Header from './App/Header'
import styles from './App.scss'
import ShowPage from '../containers/Pages/ShowPage'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()} key='provider'>
        <div>
          <Header />
          <div className='container'>
            <div className={styles['content']}>
              <Switch>
                <Route path="/pages/:id" component={ShowPage} />
                <Route path="/pages" component={Pages} />
                <Route path="/" component={Home} />
              </Switch>
              </div>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
