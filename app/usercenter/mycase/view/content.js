import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

export const Content = ({
  patient_name,
  doctor_name,
  visit_time,
  clinic_name,
  record_content,
  type,
  toDesc
}) => {

        return (<div>
                <div className={styles.CaseContentbox}>
                <div className={styles.orderDescContain+' '+styles.CaseContent+' '+styles.noborder}>
                <h3><span>{patient_name}</span></h3>
                <p><b>问诊时间</b><span>{visit_time}</span><em className={styles.clear}></em></p>
                <p><b>主治医生</b><span>{doctor_name}</span><em className={styles.clear}></em></p>
                {function(){
                    if(clinic_name == '' || clinic_name == null)
                        return <p style={{display:"none"}}><b>诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所</b><span>{clinic_name}</span><em className={styles.clear}></em></p>
                    else
                        return <p><b>诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所</b><span>{clinic_name}</span><em className={styles.clear}></em></p>

                }()}
                
                <p><b>病历类型</b><span>{function(){
                          if(type == 1){
                            return '初诊建档'
                          }else if(type == 2){
                            return '牙体牙周'
                          }else{
                            return ''
                          }
                }()}</span><em className={styles.clear}></em></p>
                <p style={{display:"block"}}><b>病历内容：</b><em className={styles.clear}></em></p>
                <div className={styles.caseText} style={{marginTop:"5px",display:"block"}}>
                <div className={styles.record_content}>
                { record_content.split("\n").join("<br />") }
                </div>
                </div>  
                </div>
                </div>
                <div className={styles.caseFiletab} id="caseDetailtab" style={{marginTop:0,marginBottom:"10px"}}>
                <div className={wxstyles.weui_cells+' '+styles.weui_cells+' '+wxstyles.weui_cells_access+' '+styles.weui_cells_access}>
                <div className={wxstyles.weui_cell}>
                <div className={styles.weui_cell_hd} onClick={ toDesc }>
                <p>病历详情</p>
                <span id="name"></span>
                </div>
                <span className={wxstyles.weui_cell_ft+' '+styles.weui_cell_ft}></span>
                </div>
                </div>
                </div>
                <div className={styles.caseFiletab} id="Filetab" style={{marginTop:0,marginBottom:"20px",display:"none"}} >
                <div className={wxstyles.weui_cells+' '+styles.weui_cells+' '+wxstyles.weui_cells_access+' '+styles.weui_cells_access}>
                <a className={wxstyles.weui_cell} href="javascript:;">
                <div className={styles.weui_cell_hd}>
                <p>附件</p>
                <span id="name"></span>
                </div>
                <span className={wxstyles.weui_cell_ft+' '+styles.weui_cell_ft}></span>
                </a>
                </div>
                </div>
                </div>) 
      }