import 'babel-polyfill'
import Immutable from 'immutable'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { Router,match,browserHistory,hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { configureStore, DevTools } from './configure-store'

import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'

import routes from './routes.js'

import ApiClient from 'app/isomorphic-api/ApiClient'

window.__SERVER__=false
window.__CLIENT__=true


const client = new ApiClient()

console.log(window.__initialState__)

var preloadstate = Immutable.fromJS(window.__initialState__)

const store = configureStore(browserHistory, client, preloadstate)

const history = syncHistoryWithStore(browserHistory, store,{
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
})


/*
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)*/
var url = window.location.pathname;

console.log("location!!!!?????")
console.log(location)

if(url.indexOf('#')==-1){
   console.log('aaaaaa')
   url = '/#'+ url
}

console.log(url)


const reloadOnPropsChange = (props, nextProps) => {
  // reload only when path/route has changed
  return props.location.pathname !== nextProps.location.pathname;
};


const component = (
  <Router routes={routes} render={(props) =>
        <ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} reloadOnPropsChange={reloadOnPropsChange}/>
      } history={history}>
  </Router>
);
match({ routes: routes, location }, () => {
console.log("client render!!!!!!!")
render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  document.getElementById('root')
);
})

/*
render(
    <Provider store={store} key="provider">
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('devtools')
  );
*/

/*
match({history,routes}, (error, redirectLocation, renderProps) => {
  console.log(renderProps)
  render(
   <Provider store={store} key="provider">
    <Router routes={routes} history={history} {...renderProps} render={(props) => <ReduxAsyncConnect {...props}/>}>
    </Router>
   </Provider>,
  document.getElementById('root')
)
})
*/


/*
render(
  <Provider store={store} key="provider">
    <Router routes={routes} render={(props) => <ReduxAsyncConnect {...props}/>} history={history}>
    </Router>
  </Provider>,
  document.getElementById('root')
)
*/


//if (__DEVTOOLS__ && !window.devToolsExtension) {
 /* 
render(
    <Provider store={store} key="provider">
      <div>
        {component}
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('devtools')
  );
*/
//}
/*
render(
  <Provider store={store}>
    <DevTools/>
  </Provider>,
  document.getElementById('devtools')
)
*/
