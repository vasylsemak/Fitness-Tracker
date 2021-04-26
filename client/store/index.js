import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './store'

const store = createStore(
  reducer,
  applyMiddleware(createLogger({ collapsed: true }))
)

export default store
