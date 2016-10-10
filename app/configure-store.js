import React from 'react'
import thunk from 'redux-thunk'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'


import {reducer as reduxAsyncConnect } from 'redux-connect'

import  auth from 'app/redux/reducers/auth'

import  order_patient from 'app/redux/reducers/order_patient'

import  clientMiddleware from 'app/redux/middleware/clientMiddleware'

import { routerReducer, routerMiddleware } from 'react-router-redux'

export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

export function configureStore(history,client,initialState={}) {
  const reducer = combineReducers({
    routing: routerReducer,
    reduxAsyncConnect,
    auth,
    order_patient
  })

  let devTools = []
  if (typeof document !== 'undefined') {
    devTools = [ DevTools.instrument() ]
  }

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),thunk,clientMiddleware(client)
      ),
      ...devTools
    )
  )

  return store
}


