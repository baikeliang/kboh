import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';
import Hammer from 'react-hammerjs'
import Promise from 'bluebird'
import { table } from  'backend/common/js/partial/lefttable.js'
//import Immutable from 'immutable'

import {
    FrontPage
} from './view/frontpage.js'

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
            }
        };
    }

	// methods
	static propTypes = {

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
            list:_list
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
	    return FrontPage({onClick:(::this.onClick),onClickToExpand:(::this.onClickToExpand),table})
	    }else{
	    return <div/>;
	    }
	}


}
