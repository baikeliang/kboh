import React, { Component } from 'react';
import MyOrder from './myorder.js'
import wxstyles from 'app/common/css/weui.min.css'
import jqwstyles from 'app/common/css/jquery-weui.css'
import styles from 'app/common/css/style.css'
import ReactList from 'react-list';

import { asyncConnect } from 'redux-connect'

import { load as loadOrders } from 'app/redux/reducers/order_patient';

import { push } from 'react-router-redux';

import { connect } from 'react-redux';

@asyncConnect([{
  promise: ({store: {dispatch, getState},params}) => {
    const promises = [];
    console.log("myorders!!!!!!!!")
    promises.push(dispatch(loadOrders(params)));
    return Promise.all(promises);
  }
}])
@connect(
  state => ({orderMetas: state.order_patient.orders}),
  {pushState: push})
export default class MyOrders extends Component {
	// methods
	static propTypes = {
		orderMetas:React.PropTypes.array.isRequired,
	}
	handleProClick(orderInfo){
				
	}
	renderOrder(index, key) {
		var orderMeta = this.props.orderMetas[index];
		return <div key={key}> <MyOrder {...orderMeta}></MyOrder></div>;
	}
	render(){
		var nodata = (this.props.orderMetas.length == 0) ? true:false;
		return (<div>
					<div className={styles.myorderNodatabox} style={nodata?{display:"none"}:{display:"block"}}>
                        <dl>
                        <dt><img src={require('app/common/images/pro12.png')} alt=""/></dt>
						<dd>您目前还没有进行任何预约</dd>
						</dl>
						<div className={styles.fotIcon}>
						<img src={require('app/common/images/logo2.png')} alt=""/>
						<p>轻快预约&nbsp;&nbsp;&nbsp;从“齿”简单</p>
						</div>
					</div>
					<div className={styles.myOrdermainbox}>
						<ReactList
							itemRenderer={::this.renderOrder}
							length={this.props.orderMetas.length}
							type='uniform'
						/>
					</div>
					<div className="nodata" style="height:50px;line-height:50px;text-align:center;font-size:14px;display:none">没有更多数据了</div>
					    <div className={jqwstyles.weuiInfiniteScroll} id="loading" style="display:none">
					    <div className={jqwstyles.infinitePreloader}></div>
							     正在加载
					</div>
		      </div>)
				}

}