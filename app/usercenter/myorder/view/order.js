import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

export const Order = ({status,
  patient_name,
  visit_time,
  reserve_number,
  service_name,
  is_return,
  toDetail
}) => {

          return (<div onClick={ toDetail }> 
                        <div className={styles.weui_cells+' '+wxstyles.weui_cells+' '+styles.weui_cells_access}>
                        <a className={wxstyles.weui_cell}>
                        <div className={styles.weui_cell_hd}>
                        <p>
                        <b> {patient_name} <em> {service_name} {(is_return==0)?'':'- 复诊'}</em></b>
                        <label>预约编号：{reserve_number} </label>
                        <label>就诊时间：<span>{visit_time}</span></label>
                        </p>
                        {function(){
                            var ret;
                            switch (status) {
                                case 1:
                                    // statements_1
                                    ret = <i className={styles.yuyuezhong}>已预约</i>;
                                    break;
                                case 2:
                                    ret = <i className={styles.wanchen}>已完成</i>;
                                    break;
                                case 3:
                                    ret = <i className={styles.guoqi}>已过期</i>;
                                    break;
                                case 4:
                                    ret = <i className={styles.quxiao}>已取消</i>;
                                    break;            
                                default:
                                    break;
                            }
                            return ret;
                        }()}
                        </div>
                        <span className={wxstyles.weui_cell_ft}></span>
                        </a>
                        </div>
                        </div>)
      }
