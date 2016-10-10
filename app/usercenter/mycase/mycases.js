import React from 'react';
import MyCase from './mycase.js'
const MyCases = React.createClass({
				propTypes: {
				orderMetas:React.PropTypes.array.isRequired,
				},
				handleProClick(caseInfo){
				
				},
				renderProjects() {
				return this.props.caseMetas.map(function(caseMeta,i){
				assign(caseMeta,{handleProClick:this.handleProClick},{key:i});
				
				return <MyCase {...caseMeta}></MyCase>;
				}.bind(this));
				},
				render(){
					return (renderProjects())
				}


})

module.exports = MyCases;