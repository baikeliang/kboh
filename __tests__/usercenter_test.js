
import Promise from 'bluebird';
import React from 'react';
import { 
  Provider, 
  connect 
} from 'react-redux';
import { Router, 
  createMemoryHistory, 
  match, 
  Route, 
  IndexRoute 
} from 'react-router';

import { 
  createStore, 
  combineReducers 
} from 'redux';
import { combineReducers as combineImmutableReducers } from 'redux-immutable';
import { 
  mount, 
  render 
} from 'enzyme';
import { spy } from 'sinon';
import { default as Immutable } from 'immutable';

import routes from 'app/routes.js'

import { 
  configureStore, 
  DevTools 
} from 'app/configure-store'

import ApiClient from 'app/isomorphic-api/ApiClient'

import { 
  auth_success,
  auth_is_not_valid,
  auth_response_error_500,
  resetMock as resetMockAuth
} from '../__mocks__/server_auth_mocker.js'

import { 
  endGlobalLoad, 
  beginGlobalLoad 
} from '../node_modules/redux-connect/lib/store';
import AsyncConnect from '../node_modules/redux-connect/lib/components/AsyncConnect';

import { 
  mountToJson, 
  renderToJson 
} from 'enzyme-to-json';


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
    auth_is_not_valid();

    var wrapper = mount(
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
      console.log(wrapper.html())
      expect(mountToJson(wrapper.find('Login div'))).toMatchSnapshot();
      console.log("auth failed !!!!!!")
      endGlobalLoadSpy.reset();
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMockAuth();
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
      var state = store.getState().toJS();
      expect(!!state.auth.user).toBe(true)

      expect(endGlobalLoadSpy.called).toBe(true);
      endGlobalLoadSpy.reset();
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMockAuth();     
    });
  });


  pit('auth err 500',function test(){

     

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
    auth_response_error_500();

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
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
    });
  
  

  })
  
})
