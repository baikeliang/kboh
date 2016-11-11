import Promise from 'bluebird';
import React from 'react';
import {
  Provider,
  connect
} from 'react-redux';
import {
  Router,
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
  orders_is_not_empty,
  orders_is_empty,
  orders_is_not_valid,
  orders_response_error_500,
  resetMock as resetMockOrder
} from '../__mocks__/server_getorders_mocker.js'

import {
  auth_success,
  auth_is_not_valid,
  auth_response_error_500,
  auth_success_serverrender_openid,
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

import { loadOnServer } from 'redux-connect'


describe('top', function suite() {
  const endGlobalLoadSpy = spy(endGlobalLoad);
  const beginGlobalLoadSpy = spy(beginGlobalLoad);

  const ReduxAsyncConnect = connect(null, {
    beginGlobalLoad: beginGlobalLoadSpy,
    endGlobalLoad: endGlobalLoadSpy,
  })(AsyncConnect);


  pit("auth not valid",function test(){

    window.__SERVER__ = false;

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

    history.push('/usercenter/myOrders');

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
      expect(!!state.auth.user).toBe(false)
      expect(mountToJson(wrapper.find('Login div'))).toMatchSnapshot();
      endGlobalLoadSpy.reset();
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMockOrder();
      resetMockAuth();
    });




  })

  pit("auth response 500",function test(){

    window.__SERVER__ = false;

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

    history.push('/usercenter/myOrders');

    auth_response_error_500();

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
      expect(!!state.auth.user).toBe(false)
      //we should have a 500 page
      endGlobalLoadSpy.reset();
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMockOrder();
      resetMockAuth();
    });




  })



  pit("auth valid : not loading: orders not empty ",function test(){

    window.__SERVER__ = false;

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

    history.push('/usercenter/myOrders');

    auth_success();
    orders_is_not_empty();

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
      expect(!!state.auth.user).toBe(true)
      console.log(wrapper)
      expect(mountToJson(wrapper.find('MyOrders div'))).toMatchSnapshot();
      endGlobalLoadSpy.reset();
      proto.loadAsyncData.restore();
      proto.componentDidMount.restore();
      resetMockOrder();
    });


  })

  pit("server render auth succed with openid",function test(){

      window.__SERVER__ = true;

      var preloadstate = Immutable.fromJS({})

      var client = new ApiClient()

      const history = createMemoryHistory();

      var store = configureStore(history, client, preloadstate)

      const proto = ReduxAsyncConnect.WrappedComponent.prototype;

      spy(proto, 'loadAsyncData');

      auth_success_serverrender_openid();

    return new Promise((resolve, reject) => {

      match({ history, routes, location: '/usercenter/myOrders' }, (error, redirectLocation, renderProps) => {

         if (error) {
           return reject(error);
         }
         if (redirectLocation) {
           return reject(new Error('redirected'));
         }
         if (!renderProps) {
           return reject(new Error('404'));
         }

         var req = {
            openid:'openidfortest',
            cookies:{
              tokenbohe:'dummy'
            }
         }

        return loadOnServer({ ...renderProps, store, params:{ req }}).then(() => {
            const content = render(
              <Provider store={store} key="provider">
                <ReduxAsyncConnect {...renderProps} />
              </Provider>
            )
            var state = store.getState().toJS();
            expect(!!state.auth.user).toBe(true);
            expect(renderToJson(content)).toMatchSnapshot();
            resolve();
          },(err)=>{

       }).catch(reject);

    })
   })
  })

})

