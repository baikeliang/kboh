
import Promise from 'bluebird';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { Router, createMemoryHistory, match, Route, IndexRoute } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { combineReducers as combineImmutableReducers } from 'redux-immutable';
import { mount, render } from 'enzyme';
import { spy } from 'sinon';
import { default as Immutable } from 'immutable';

import routes from 'app/routes.js'

import { configureStore, DevTools } from 'app/configure-store'

import ApiClient from 'app/isomorphic-api/ApiClient'

//import { AsyncConnect, endGlobalLoad, beginGlobalLoad } from 'redux-connect'

//import AsyncConnect from '../modules/components/AsyncConnect';

import { auth_success,auth_not_valid,error500,resetMock} from '../__mocks__/server_mocker.js'

import { endGlobalLoad, beginGlobalLoad } from '../node_modules/redux-connect/lib/store';
import AsyncConnect from '../node_modules/redux-connect/lib/components/AsyncConnect';


describe('top', function suite() {

  const endGlobalLoadSpy = spy(endGlobalLoad);
  const beginGlobalLoadSpy = spy(beginGlobalLoad);

  const ReduxAsyncConnect = connect(null, {
    beginGlobalLoad: beginGlobalLoadSpy,
    endGlobalLoad: endGlobalLoadSpy,
  })(AsyncConnect);

  pit('user not valid', function test(){
     

    var preloadstate = Immutable.fromJS({})

    var client = new ApiClient()

    const history = createMemoryHistory();

    var store = configureStore(history, client, preloadstate)
 
    const proto = ReduxAsyncConnect.WrappedComponent.prototype;

    spy(proto, 'loadAsyncData');
    spy(proto, 'componentDidMount');
    var reloadOnPropsChange = (props, nextProps) => {
        // reload only when path/route has changed
        return props.location.pathname !== nextProps.location.pathname;
    };
    var location = history.createLocation('/usercenter');

    history.push('/usercenter');
    auth_not_valid();

      mount(
       <Provider store={store} key="provider">
           <Router routes={routes} location={location} render={(props) => {
               return (<ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} reloadOnPropsChange={reloadOnPropsChange}/>)}
           }  history={history}>
           </Router>
       </Provider>
      );
    

    expect(proto.loadAsyncData.calledOnce).toBe(true);
    expect(proto.componentDidMount.calledOnce).toBe(true);



    expect(beginGlobalLoadSpy.called).toBe(true);
    beginGlobalLoadSpy.reset();

    return proto.loadAsyncData.returnValues[0].then(() => {
      expect(endGlobalLoadSpy.called).toBe(true);
      var state = store.getState().toJS();
      expect(state.auth.error.info).toBe('auth')
      expect(!!state.auth.user).toBe(false)
      endGlobalLoadSpy.reset();
      console.log("WWWWWWWWWWW")
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMock();
    });
  
  });

  pit('auth succed', function test() {

    var preloadstate = Immutable.fromJS({})

    var client = new ApiClient()

    const history = createMemoryHistory();

    var store = configureStore(history, client, preloadstate)
 
    const proto = ReduxAsyncConnect.WrappedComponent.prototype;

    spy(proto, 'loadAsyncData');
    spy(proto, 'componentDidMount');
    var reloadOnPropsChange = (props, nextProps) => {
        // reload only when path/route has changed
        return props.location.pathname !== nextProps.location.pathname;
    };
    var location = history.createLocation('/usercenter');

    history.push('/usercenter');
    auth_success();

      mount(
       <Provider store={store} key="provider">
           <Router routes={routes} location={location} render={(props) => {
               return (<ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} reloadOnPropsChange={reloadOnPropsChange}/>)}
           }  history={history}>
           </Router>
       </Provider>
      );
    

    expect(proto.loadAsyncData.calledOnce).toBe(true);
    expect(proto.componentDidMount.calledOnce).toBe(true);



    expect(beginGlobalLoadSpy.called).toBe(true);
    beginGlobalLoadSpy.reset();
    return proto.loadAsyncData.returnValues[0].then(() => {
      expect(endGlobalLoadSpy.called).toBe(true);
      endGlobalLoadSpy.reset();
      console.log("WWWWWWWWWWW")
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMock();     
    });
  });


  pit('err 500',function test(){

     

    var preloadstate = Immutable.fromJS({})

    var client = new ApiClient()

    const history = createMemoryHistory();

    var store = configureStore(history, client, preloadstate)
 
    const proto = ReduxAsyncConnect.WrappedComponent.prototype;

    spy(proto, 'loadAsyncData');
    spy(proto, 'componentDidMount');
    var reloadOnPropsChange = (props, nextProps) => {
        // reload only when path/route has changed
        return props.location.pathname !== nextProps.location.pathname;
    };
    var location = history.createLocation('/usercenter');

    history.push('/usercenter');
    error500();

      mount(
       <Provider store={store} key="provider">
           <Router routes={routes} location={location} render={(props) => {
               return (<ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} reloadOnPropsChange={reloadOnPropsChange}/>)}
           }  history={history}>
           </Router>
       </Provider>
      );
    

    expect(proto.loadAsyncData.calledOnce).toBe(true);
    expect(proto.componentDidMount.calledOnce).toBe(true);



    expect(beginGlobalLoadSpy.called).toBe(true);
    beginGlobalLoadSpy.reset();
    
    return proto.loadAsyncData.returnValues[0].then(() => {
      expect(endGlobalLoadSpy.called).toBe(true);
      endGlobalLoadSpy.reset();
      console.log("WWWWWWWWWWW")
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
    });
  
  

  })
  
})
