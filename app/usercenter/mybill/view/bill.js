import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

export const Bill = ({status,
  patient_name,
  project_name,
  pay_money,
  bill_number,
  toDetail
}) => {
          return (<div className={wxstyles.weui_cells+' '+styles.weui_cells+' '+wxstyles.weui_cells_access+' '+styles.weui_cells_access}>
                     <div className={wxstyles.weui_cell} onClick={ toDetail }>
                        <div className={styles.weui_cell_hd}>
                          <p>
                            <b>{ patient_name } <em> { project_name } </em></b>
                            <label>预约单号：{ bill_number } </label>
                            <label><span className={(status ==1)?styles.colorzhifu:styles.colornozhifu}>￥{ pay_money }</span></label>
                          </p>
                          <i className={(status == 1)?styles.zhifu:styles.nozhifu}>{(status == 1)?'已支付':'待支付'}</i>
                        </div>
                        <span className={wxstyles.weui_cell_ft+' '+styles.weui_cell_ft}></span>
                     </div>
                  </div>)
      }