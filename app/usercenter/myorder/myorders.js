import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import MyOrder from './myorder.js'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import Immutable from 'immutable'

import { FrontPage } from './view/frontpage.js'

import { isElementVisible } from 'app/util/utils.js'

import { asyncConnect } from 'redux-connect'

import { LoadedorLoading as successorLoading ,  load as loadOrders } from 'app/redux/reducers/order_patient';

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    console.log("myorders!!!!!!!!")
    console.log(this)
    if(!successorLoading(getState()))
      promises.push(dispatch(loadOrders({num:15,begin:0})));
    return Promise.all(promises);
  }
}])
@connect(
    state => {
        return {
            loading: state.getIn(['order_patient', 'loading']),
            orderMetas: state.hasIn(['order_patient', 'orders']) ? state.getIn(['order_patient', 'orders']) : Immutable.List([])
        }
    }, { pushState: push, load: loadOrders })
export default class MyOrders extends Component {
	// methods
	static propTypes = {
		orderMetas:React.PropTypes.object.isRequired,
	}

	renderOrder(index, key) {
		console.log("renderOrder")
		console.log(this)
        console.log(index)
        console.log(this.props.orderMetas.size)
		var orderMeta = this.props.orderMetas.get(index).toJS();
		orderMeta.idx = index;
        if(this.props.orderMetas.size == (index+1)){
        	orderMeta.loading = this.props.loading;
        	return <MyOrder ref={(c) => this._last = c} key={key} {...orderMeta}></MyOrder>;
        }
		return <MyOrder key={key} {...orderMeta}></MyOrder>;
	}

	handlePan(ev) {
	    console.log("handlePan!!!!!!")
	    var toLoad = isElementVisible(ReactDOM.findDOMNode(this._last))
        
        console.log(toLoad)
	    console.log("pan!!!!!!!!!!!!")
	    console.log(ev.isFinal)
	    if (ev.direction == 8) {
	        console.log("up!!!!!!!!!!!!")
            console.log(this.props.orderMetas.size)
	        if(toLoad){
	        	console.log("loading!!!!!!!!!!!!!!!!!")
	        	if(!this.props.loading)
	        	   this.props.load({ num: 15, begin: 0 })
	        }
	    } else if (ev.direction == 16) {
	        console.log("down")
	    }

	}
    componentDidMount() {

    }
	render() {
		var size = this.props.orderMetas.size;
	    var nodata = (size == 0) ? true : false;
	    
	    console.log(nodata)
	    console.log("JJJJJ11111111111111111")
	    var options = {
	        touchAction: 'pan-y'
	    };

	    return FrontPage({ nodata, options, length: size, handlePan: (::this.handlePan), renderItem: (::this.renderOrder) })
	}


}