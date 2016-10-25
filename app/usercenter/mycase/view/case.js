import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

export const Case = ({
  type,
  visit_time,
  toContent
}) => {

          return (<div className={wxstyles.weui_cells+' '+styles.weui_cells+' '+wxstyles.weui_cells_access+' '+styles.weui_cells_access}>
                    <a className={wxstyles.weui_cell} onClick={ toContent }>
                    <div className={styles.weui_cell_hd}>
                    <p><b>{visit_time}</b></p>
                    {function(){
                    if(type == 1)
                    return <span>初诊建档</span>
                    else if(type == 2)
                    return <span>牙体牙周</span>
                    }()}
                    </div>
                    <span className={wxstyles.weui_cell_ft}></span>
                    </a>
                 </div>) 
      }
