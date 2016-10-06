/*eslint-disable no-console */
import express from 'express'
import serialize from 'serialize-javascript'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../../webpack.client.config.js'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { ReduxAsyncConnect, loadOnServer } from 'redux-connect'

import { configureStore } from 'app/configure-store.js'

import routes from 'app/routes'

import jwt from 'jsonwebtoken'

import ApiClient from 'app/isomorphic-api/ApiClient'

//import { URLSearchParams } from 'url-search-params-polyfill'

import { URLSearchParams } from 'urlsearchparams'

import ajax from './interface/interface.js'

import Promise from 'bluebird'

//var URLSearchParams = URLSearchParams || require('../urlsearchparams').URLSearchParams;

global.__CLIENT__ = false;
global.__SERVER__ = true;

const app = express()

app.use(webpackDevMiddleware(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  },
  resolve: {
        alias: {
            app: webpackConfig.resolve.alias.app
        }
    }
}))

const HTML = ({ content, store }) => (
  <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <title>登陆</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"/>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
      <div id="devtools"/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${serialize(store.getState())};` }}/>
      <script src="/bundle.js"/>
    </body>
  </html>
)

app.get('/wxcallback/auth',function(req,res){

    console.log('enter /wxcallback/auth !!!!!')
    /*
    var code = req.query.code
    var type = req.query.type
    */
    var code = 'haha'



    if (code === undefined || code === null) {


    } else {
        /// sync get openid
        let openid = 'asdaaaaa'

        let u = new URLSearchParams();
        
        console.log('KKKKKKKK'+u)

        u.append('openid', openid);
        res.redirect('/usercenter?'+u)

    }


});

app.use(function (req, res, next) {
  const memoryHistory = createMemoryHistory(req.url)
  const client = new ApiClient(req)
  const store = configureStore(memoryHistory,client)
  const history = syncHistoryWithStore(memoryHistory, store)

  if(req.url.indexOf('/wxcallback')==0){
      next();
      return;
  }
  else if(req.url.indexOf('/usercenter?')==0){
      var openid = req.query.openid
      console.log('openid!!!!!!!   '+openid)

  }
  console.log(req.url);
  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      console.log('to match2')
      loadOnServer({ ...renderProps, store, params:{openid}}).then(() => {
      console.log('AAAAAAAAA   '+req.url)
      // 2. use `ReduxAsyncConnect` instead of `RoutingContext` and pass it `renderProps` 
      const content = renderToString(
        <Provider store={store} key="provider">
          <ReduxAsyncConnect {...renderProps} />
        </Provider>
      )

      res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
    },(err)=>{
      if(err.info == 'auth')
        res.redirect('/login')
    })
    }
  })
})

app.listen(3000, function () {
  console.log('Server listening on http://localhost:3000, Ctrl+C to stop')
})


