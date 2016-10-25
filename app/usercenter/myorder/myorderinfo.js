import React, { Component } from 'react';
import { asyncConnect } from 'redux-connect'
import { load_detail as load } from 'app/redux/reducers/order_patient';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Promise from 'bluebird'
import { OrderInfo } from './view/orderinfo.js'

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {
        const promises = [];
        console.log("orderinfo!!!!!!")
        var state = getState();
        var loc = state.get('routing').toJS()
        promises.push(dispatch(load({ id: parseInt(loc.locationBeforeTransitions.query.id, 10) })))
        return Promise.all(promises);
    }
}])
@connect(
    state => {
        console.log("connect myorderinfo!!!!!")
        var loc = state.get('routing').toJS()
        var idx = parseInt(loc.locationBeforeTransitions.query.idx, 10)
        var orders = state.getIn(['order_patient', 'orders']).toJS()
        console.log(orders)
        return {...orders[idx] }
    }, { pushState: push })
export default class MyOrderInfo extends Component {
    static propTypes = {
        appointment_name: React.PropTypes.string.isRequired,
        reserve_number: React.PropTypes.number.isRequired,
        contact_tel: React.PropTypes.string.isRequired,
        visit_time: React.PropTypes.string.isRequired,
        company_name: React.PropTypes.string.isRequired,
        doctor_name: React.PropTypes.string.isRequired,
        clinic_name: React.PropTypes.string.isRequired,
        project_name: React.PropTypes.string.isRequired,
        clinic_address: React.PropTypes.string.isRequired,
        status: React.PropTypes.number.isRequired,
        patient_name: React.PropTypes.string.isRequired,
        relations: React.PropTypes.string.isRequired
    };
    render() {
        return (OrderInfo(this.props));
    }
}
