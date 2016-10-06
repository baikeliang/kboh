import fetch from 'isomorphic-fetch'
import { URLSearchParams } from 'url-search-params-polyfill'
const ajax = {
	getUserInfoByOpenid:function({openid}){

			var u = new URLSearchParams();
			u.append('openid', openid);
			return fetch('http://192.168.10.10/userinfo/rest?openid=asdaaaa',{
			        method: 'GET',
			        mode: 'cors',
			        cache: 'default'
			    })
			    .then(function(response) {
			    	console.log('hhhhhhh>>>>>>>>>>>>>>>>')
			    	//console.log(response.json())
			    	console.log('hhhhhhh>>>>>>>>>>>>>>>>')
			        if (response.status >= 400) {
			            throw new Error("Bad response from server");
			        }
			        console.log('>>>>>>>>>>>>>>>>')
			        return response.json();
			    },function(error){console.log(error)}).then(function(json){
			    	console.log(json)
			    })
	}
}

export default ajax