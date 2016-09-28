var If = require('../config/interface.js');
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import Projects from 'app/toorder/projectsRender.js';
describe('Choose pro ', function() {
            beforeEach(function() {

                jasmine.Ajax.install();
                console.log(If);

            });
            afterEach(function() {
                jasmine.Ajax.uninstall();
            })

            it('es6 test', function() {

                var thunkMiddleware = function({ dispatch, getState }) {
                    // console.log('Enter thunkMiddleware');
                    console.log('dddddd');
                    console.log(dispatch);
                    console.log('ffffff');

                var amount = "sssss";
                var gg = {
                        type: 'WITHDRAW',
                        amount
                    }
                console.log(gg);    


                }

                thunkMiddleware({ dispatch11: "sss", getState: "ssaa" });


            });

            it('pro render', function() {
                    //request = jasmine.Ajax.requests.mostRecent();
                    //expect(request.url).toBe(If.DoctorserviceLst);
                    TestUtils.renderIntoDocument( < Projects > < /Projects>);


                    });

            });
