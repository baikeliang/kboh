import React from 'react';
import MyOrder from './myorder.js'
const MyOrders = React.createClass({
				propTypes: {
				orderMetas:React.PropTypes.array.isRequired,
				},
				handleProClick(orderInfo){
				
				},
				renderProjects() {
				return this.props.orderMetas.map(function(orderMeta,i){
				assign(orderMeta,{handleProClick:this.handleProClick},{key:i});
				
				return <MyOrder {...orderMeta}></MyOrder>;
				}.bind(this));
				},
				render(){
					return this.renderProjects()
				}


})
module.exports = MyOrders ;