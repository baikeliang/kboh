import React from 'react';


import { Router, DefaultRoute, Route, NotFoundRoute, Redirect,IndexRoute} from 'react-router';


import DashBoard  from 'backend/useradmin/main.js'

import Login from 'backend/login.js'


const App = ({ children }) => (
  <div>
    {children || "ddddd"}
  </div>
)

const UserAdmin =  ({ children }) => (
  <div>
    {children}
  </div>
)

function requireAuth(nextState, replaceState) {

  //if ((__SERVER__==false)&&localStorage&&(!localStorage.token))
  //    replaceState({ nextPathname: nextState.location.pathname }, '/login')


  console.log("require.....auth")

}

const routes = (
      <Route path="/" component={ App }>
        <Route path="useradmin(?)" component={ UserAdmin } onEnter={requireAuth}>
          <IndexRoute component={ DashBoard }/>
        </Route>
        <Route path="login" component={ Login } />
      </Route>
)

export default routes

