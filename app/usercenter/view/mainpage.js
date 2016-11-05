import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const UCenter = ({
  user,
  toOrder,
  toOrders,
  toCases,
  toBills
}) => {       
          var photo = user.photo;
   
          var username = user.username;

          return (<div>
                  <header className="p_top huanzhebg">
                     <dl>
                       <dt id="userImg"><img src={photo?photo:require('app/common/images/userPic.png')} alt="" /></dt>
                       <dd id="userName">{username?username:'完善个人信息'}</dd>
                     </dl>
                     <a href="set.html" className="anniu">
                       <img className="shezhi" src={require('app/common/images/shezhi.png')} alt="" />
                     </a>
                  </header>
                  
                  <div onClick={toOrder} className="chuzhen">
                     <div className="chuzhenson">
                       <img src={require('app/common/images/huanzhe1.png')} alt="" />
                       <div className="rtop_r">
                        <h6 className="spantitle">我要预约</h6>
                        <span className="spancon"></span>
                       </div>
                       <div className="clear"></div>
                     </div>
                  </div>
              
                  <div className="block">
                  <div onClick={toOrders} className="a1">
                    <div className="blockson">
                      <img src={require('app/common/images/huanzhe2.png')} alt="" />
                      <span>我的预约</span>
                    </div>
                  </div>
                  <div onClick={toCases} className="a2">
                    <div className="blockson">
                      <img src={require('app/common/images/huanzhe3.png')} alt="" />
                      <span>我的病历</span>
                    </div>
                  </div>
                  <div onClick={toBills} className="a1">
                    <div className="blockson">
                      <img src={require('app/common/images/huanzhe4.png')} alt="" />
                      <span>我的账单</span>
                    </div>
                  </div>
                  <a href="personmsg.html" className="a2">
                    <div className="blockson">
                      <img src={require('app/common/images/huanzhe5.png')} alt="" />
                      <span>个人信息</span>
                    </div>
                  </a>
                  </div>
              
                  <div className="fotIcon">
                    <img src={require('app/common/images/logo2.png')} alt=""/>
                    <p>轻快预约&nbsp;&nbsp;&nbsp;从“齿”简单</p>
                  </div>
                  </div>) 
      }