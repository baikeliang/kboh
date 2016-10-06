import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'
//import { URLSearchParams } from 'url-search-params-polyfill'
import { URLSearchParams } from 'urlsearchparams'

const methods = ['GET', 'POST'];
export default class ApiClient {
    constructor(args) {
        // code
        methods.forEach((method) =>
            this[method] = (path, { params, data } = {} ,{format,done,error}) => {
                ///////////////////////////////
                var u = new URLSearchParams();
                console.log(method)
                var req = {
                    method: method,
                    mode: 'cors',
                    cache: 'default'
                }
                if ((method == 'GET') && params) {
                    for (var key of Object.keys(params)) {
                      u.append(key, params[key])
                    }
                } else if (method == 'POST' && data) {

                    req.body = JSON.stringify(data)
                    req.headers = {
                        'Content-Type': 'application/json'
                    }

                }
                console.log('8888888888'+path+u)
                return fetch(path + u, req).then(format).then(done,error)
            }
        )
    }

    // methods
}
