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
import {
    default as Immutable } from 'immutable';

import routes from 'backend/routes.js'

import {
    configureStore,
    DevTools
} from 'backend/configure-store'

import ApiClient from 'backend/isomorphic-api/ApiClient'

import {
    auth_success,
    auth_is_not_valid,
    auth_response_error_500,
    auth_success_serverrender_openid,
    auth_failed_serverrender_openid,
    resetMock as resetMockAuth
} from '../__mocks__/backend/server_auth_mocker.js'

import {
    load,
    load_detail_baseinfo,
    load_detail_history,
    load_detail_oral,
    create_user,
    update_baseinfo,
    create_historyinfo,
    create_oralinfo,
    update_historyinfo,
    update_oralinfo,
    frontUserForInfo,
    historyEditADD
} from 'backend/redux/reducers/user_patient.js'

import {
    load_users_success,
    load_users_success_result,
    load_users_fail,
    load_history_success_result,
    load_history_success,
    load_history_fail,
    load_baseinfo_success,
    load_baseinfo_fail,
    load_oral_success,
    load_oral_success_result,
    load_oral_fail,
    create_user_success,
    create_history_success,
    create_oral_success,
    create_history_fail,
    create_oral_fail,
    resetMock
} from '../__mocks__/backend/server_user_patient_mocker.js'

import {
   load_success as load_cases_success,
   load_fail    as load_cases_fail,
   load_detail_success as load_case_detail_success,
   update_detail_success as update_case_detail_success
} from '../__mocks__/backend/server_case_patient_mocker.js'

import {
    load as load_cases,
    load_detail as load_case_detail
    create_case,
    update_case
} from 'backend/redux/reducers/case_patient.js'


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

import { renderToString } from 'react-dom/server'

describe('case_patient function test', function suite() {

    const endGlobalLoadSpy = spy(endGlobalLoad);
    const beginGlobalLoadSpy = spy(beginGlobalLoad);

    const ReduxAsyncConnect = connect(null, {
        beginGlobalLoad: beginGlobalLoadSpy,
        endGlobalLoad: endGlobalLoadSpy,
    })(AsyncConnect);

    pit('create caseindex  >  create template  > create acase', function test() {

                window.__SERVER__ = false;

                var preloadstate = Immutable.fromJS({})


                var client = new ApiClient()

                const history = createMemoryHistory();

                var store = configureStore(history, client, preloadstate)

                var historyinfosize=0;
                load_cases_success({begin:0})

                return store.dispatch(load_cases({begin:0,num:10})).then(() => {
                let state = store.getState().toJS();
                expect(state.case_patient.cases[0].id).toBe(0);
                expect(state.case_patient.cases[4].id).toBe(4);
                load_case_detail_success({id:state.case_patient.cases[0].id})
                return load_case_detail({id:state.case_patient.cases[0].id})
                }).then(() => {
                let state = store.getState().toJS();
                state.case_patient.cases[0].meta_data.length = 3;
                return store.dispatch(create_historyinfo({ historyedit }))
                })
    })

})
