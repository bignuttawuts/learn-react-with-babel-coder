import { createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
  const store = createStore(rootReducer)
  
  if (module.hot) {
    System.import('../reducers').then(nextRootReducer =>
      store.replaceReducer(nextRootReducer.default)
    )
  }

  return store
}