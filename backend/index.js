import React, { Component,PropTypes } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import { table } from  'backend/common/js/partial/lefttable.js'
import  UserListCom,{ asyncEvent as userListAsync } from  './useradmin/userlist.js'

import  OrderListCom,{ asyncEvent as orderListAsync } from  './ordertable/orderlist.js'

import  DoctorListCom,{ asyncEvent as doctorListAsync } from './doctoradmin/doctorlist.js'

import  ClinicListCom,{ asyncEvent as clinicListAsync } from './clinicadmin/cliniclist.js'

import  Labelset,{ asyncEvent as labelAsync } from './doctoradmin/LabelSet.js'


import { LeftList } from  'backend/common/js/partial/left_table.js'

import ErrorCenter from 'backend/errorcenter/teeth/errorcenter.js'

import {
    asyncConnect
} from 'redux-connect'

import {
	isLoaded as isAuthLoaded,
	load as loadAuth,
	logout
} from 'backend/redux/reducers/auth';


import {
    push
} from 'react-router-redux';

import {
    connect
} from 'react-redux';

@asyncConnect([{
    promise: ({ store: { dispatch, getState }, params }) => {

        if (!isAuthLoaded(getState())) {
            return dispatch(loadAuth(params)).then(function() {
                    return Promise.resolve();
            })
        }else{
                    return Promise.resolve();
        }
    }
}])
@connect(
    state => {
        return {
        	auth : state.get('auth')
        }
    }, { pushState: push })
export default class UserAdmin extends Component {
    constructor(props) {
        // code
        super(props);
        this.state = {
            table: {
                title:table.title,
                list:table.list.map((item) => {
                return item;
            })
            },
            toShowRight:function(){
                return '';
            }
        };
    }

	// methods
	static propTypes = {

	}
    static contextTypes = {
        store: PropTypes.object.isRequired,
    };
    static childContextTypes = {
         showRight: React.PropTypes.func.isRequired
    };

    getChildContext(){
        return {
            showRight: (this.showRight.bind(this))
        }
    }

    showRight({ asyncProcess,itemid,comCreater }){

        var _list = this.state.table.list.map((item)=>{
             return item;
        })
        var _title = this.state.table.title;

        const promises = [];
        var self = this;
        var choose = itemid?itemid:this.state.table.choose;
        console.log(this.context.store)
        console.log("sssseeeewwwwww")
        asyncProcess.forEach(function(p){
             promises.push(p.promise({store:self.context.store,params:{}}))
        })

        Promise.all(promises).then(function(s){
          self.setState({table:{
            title:_title,
            list:_list,
            choose
        },toShowRight:function(){
            return comCreater()
        }
        })
        },function(e){

        })
    }

    componentWillMount() {
        if (this.props.auth.has('user')) {
            return;
        } else {
            if (this.props.auth.getIn(['error', 'info']) == 'auth') {
                this.props.pushState('/login');
            }
        }
        return;

    }
    onClick(ev,itemid){
        console.log("change___________")
        console.log(itemid)
        var asyncProcess =  (function(){
            if(itemid == '0')
                return (orderListAsync)
             else if(itemid == '1')
                return (userListAsync)
             else if(itemid == '2-0')
                return (doctorListAsync)
             else if(itemid == '2-2')
                return (labelAsync)
             else if(itemid == '3-0')
                return (clinicListAsync)
             else
                return []
        })()
        this.showRight({
            asyncProcess:asyncProcess,
            itemid,
            comCreater:function(){
             if(itemid == '0')
                return (<OrderListCom/>)
             else if(itemid == '1')
                return (<UserListCom/>)
             else if(itemid == '2-0')
                return (<DoctorListCom/>)
             else if(itemid == '2-2')
                return (<Labelset/>)
             else if(itemid == '3-0')
                return (<ClinicListCom/>)
             else
                return <div/>
            }
         })

    }
    onClickToExpand(ev, itemid) {

        var _list = this.state.table.list.map((item)=>{
             if (item.showchild && item.id == itemid) {
                    item.showchild = false;
                }else if((item.id == itemid)&&!item.showchild){
                    item.showchild =  true;
                }
                return item;
        })
        var _title = this.state.table.title;

        this.setState({table:{
            title:_title,
            list:_list,
            choose:itemid
        }})
        console.log('jjjjj')
    }


    componentDidMount() {

    }
	render() {

        if(this.props.auth.has('user')){
        var  table = this.state.table;
        console.log(table)
        console.log("ooooooooo")
	    return (<div style={{position:"fixed",width:'100%',height:'100%',top:'0px'}}>
                 <div className='header'>
                   <div className="logo">
                   <img src={require('backend/common/images/logo2.png')} alt=""/>
                   <span>薄荷口腔</span>
                   </div>
                   <div className="exit">
                    <a href="#" className="exit-but">退出</a>
                    <p>欢迎您！<span>{this.props.auth.getIn(['user','username'])}</span></p>
                   </div>
                 </div>
                 {LeftList({onClick:(::this.onClick),onClickToExpand:(::this.onClickToExpand),table})}
                 <div className="container-right">
                     <div className="container-right-main">
	                    { this.state.toShowRight() }
                     </div>
                 </div>
                 { <ErrorCenter/> }
               </div>)
        }else{
	    return <div/>;
	    }
	}


}
