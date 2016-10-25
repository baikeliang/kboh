import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

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
                  <header className={styles.p_top + ' '+ styles.huanzhebg}>
                     <dl>
                       <dt id="userImg"><img src={photo?photo:require('app/common/images/userPic.png')} alt="" /></dt>
                       <dd id="userName">{username?username:'完善个人信息'}</dd>
                     </dl>
                     <a href="set.html" className={styles.anniu}>
                       <img className={styles.shezhi} src={require('app/common/images/shezhi.png')} alt="" />
                     </a>
                  </header>
                  
                  <div onClick={toOrder} className={styles.chuzhen}>
                     <div className={styles.chuzhenson}>
                       <img src={require('app/common/images/huanzhe1.png')} alt="" />
                       <div className={styles.rtop_r}>
                        <h6 className={styles.spantitle}>我要预约</h6>
                        <span className={styles.spancon}></span>
                       </div>
                       <div className={styles.clear}></div>
                     </div>
                  </div>
              
                  <div className={styles.block}>
                  <div onClick={toOrders} className={styles.a1}>
                    <div className={styles.blockson}>
                      <img src={require('app/common/images/huanzhe2.png')} alt="" />
                      <span>我的预约</span>
                    </div>
                  </div>
                  <div onClick={toCases} className={styles.a2}>
                    <div className={styles.blockson}>
                      <img src={require('app/common/images/huanzhe3.png')} alt="" />
                      <span>我的病历</span>
                    </div>
                  </div>
                  <div onClick={toBills} className={styles.a1}>
                    <div className={styles.blockson}>
                      <img src={require('app/common/images/huanzhe4.png')} alt="" />
                      <span>我的账单</span>
                    </div>
                  </div>
                  <a href="personmsg.html" className={styles.a2}>
                    <div className={styles.blockson}>
                      <img src={require('app/common/images/huanzhe5.png')} alt="" />
                      <span>个人信息</span>
                    </div>
                  </a>
                  </div>
              
                  <div className={styles.fotIcon}>
                    <img src={require('app/common/images/logo2.png')} alt=""/>
                    <p>轻快预约&nbsp;&nbsp;&nbsp;从“齿”简单</p>
                  </div>
                  </div>) 
      }