import React , { Component } from 'react';

import { LoginPage } from './view/loginpage.js'

export default class Login extends Component {
	constructor(props) {
		// code
	  super(props);
      this.state = {bullet:0};
	}

	// methods
	next() {
        this.refs.reactSwipe.prev();
        this.setState({bullet:1});
    }
    prev() {
        this.refs.reactSwipe.next();
        this.setState({bullet:0});
    }
    handleSwipe(ev) {

       	if(ev.direction ==4){
        		  console.log("right");

                  this.next();

        	}else{
        		  console.log("left");
                  this.prev();
        	}
    }
	render(){
		
       return LoginPage({bullet:this.state.bullet,handleSwipe:(::this.handleSwipe)});
	}
        	
}
