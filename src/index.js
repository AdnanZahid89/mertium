import React from 'react';
import { render } from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import './styles/font-awesome.min.css';
import './styles/main.css';
import './styles/bootstrap.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store


// ReactDOM.render(<App />, document.getElementById('root'));

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)

registerServiceWorker();
