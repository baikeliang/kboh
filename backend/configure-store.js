import React from 'react'
import thunk from 'redux-thunk'
import Immutable from 'immutable'

import { createStore, compose, applyMiddleware } from 'redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import {
    combineReducers
} from 'redux-immutable';



import auth from 'backend/redux/reducers/auth'

import order_patient from 'backend/redux/reducers/order_patient'

import bill_patient from 'backend/redux/reducers/bill_patient'

import case_patient from 'backend/redux/reducers/case_patient'

import wxjdk from 'backend/redux/reducers/wxjdk'

import clientMiddleware from 'backend/redux/middleware/clientMiddleware'

import { routerMiddleware } from 'react-router-redux'

import routerReducer from 'backend/redux/reducers/routerReducer'

import { setToImmutableStateFunc, setToMutableStateFunc, immutableReducer as reduxAsyncConnect } from 'redux-connect';

// Set the mutability/immutability functions
setToImmutableStateFunc((mutableState) => Immutable.fromJS(mutableState));
setToMutableStateFunc((immutableState) => immutableState.toJS());


export const DevTools = createDevTools( <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
                                           <LogMonitor theme="tomorrow" preserveScrollTop={ false } />
                                        </DockMonitor>)

export function configureStore(history, client, initialState = {},mocker) {
    const reducer = combineReducers({
        routing: routerReducer,
        reduxAsyncConnect,
        auth,
        order_patient,
        case_patient,
        bill_patient,
        wxjdk
    })

    let devTools = []
    if (typeof document !== 'undefined') {
        devTools = [DevTools.instrument()]
    }

    const store = mocker ? createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                mocker(), clientMiddleware(client), routerMiddleware(history)
            ),
            ...devTools
        )
    ) : createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                clientMiddleware(client), routerMiddleware(history)
            ),
            ...devTools
        )
    )

    return store
}
