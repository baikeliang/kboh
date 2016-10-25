import React from 'react';


import { Router, DefaultRoute, Route, NotFoundRoute, Redirect,IndexRoute} from 'react-router';

import ToOrder from 'app/toorder/main.js'

import DashBoard  from 'app/usercenter/main.js'

import MyOrders from 'app/usercenter/myorder/myorders.js'
import MyOrderInfo from 'app/usercenter/myorder/myorderinfo.js'
import MyCases from 'app/usercenter/mycase/mycases.js'
import MyCaseContent from 'app/usercenter/mycase/mycasecontent.js'
import MyCaseDesc from 'app/usercenter/mycase/mycasedesc.js'
import MyBills from 'app/usercenter/mybill/mybills.js'
import MyBillContent from 'app/usercenter/mybill/mybillcontent.js'
import Login from 'app/usercenter/login.js'


const App = ({ children }) => (
  <div>
    {children || "ddddd"} 
  </div>
)

const UserCenter =  ({ children }) => (
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
        <Route path="usercenter(?)" component={ UserCenter } onEnter={requireAuth}>
          <IndexRoute component={ DashBoard }/>
          <Route path="/usercenter/toOrder"   component={ ToOrder }/>
          <Route path="/usercenter/myOrders"  component={ MyOrders } />
          <Route path="/usercenter/myOrderInfo" component={ MyOrderInfo } />
          <Route path="/usercenter/myCases"   component={ MyCases }/>
          <Route path="/usercenter/myCaseContent"   component={ MyCaseContent }/>
          <Route path="/usercenter/myCaseDesc"    component={ MyCaseDesc }/>
          <Route path="/usercenter/myBills" component={ MyBills }/>
          <Route path="/usercenter/myBillContent" component={ MyBillContent }/>

        </Route>        
        <Route path="login" component={ Login } />  
      </Route>
)

export default routes

