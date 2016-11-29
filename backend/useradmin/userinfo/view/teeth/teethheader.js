import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

export const TeethHeader = ({
	edit,
	check,
	add,
	addTime,
    teeth_status,
    toAdd,
    toEdit,
    toCheck,
    changeCheckTime,
    changeEditTime
}) => {
            if(check){
            	 var index=0;
                 return (<div className="time z_time_edit" style={{top:'215px'}}>
                          <div className="z_time_btn" style={{border:'none'}}>
                              <p>
                                <b>更新记录：</b>
                                  <select onChange={ changeCheckTime }>
                                     {teeth_status.allUserTeeth[teeth_status.teeth_ui.useridx].map((teeth)=>{
                                     	index++;
                                     	return (<option value={ index }>{teeth.time}</option>)
                                     })}
                                  </select>
                              </p>

                              <label>
                                  <span onClick={ toAdd } className="default_inputbtn z_add_btn">添加</span>
                                  <span onClick={ toEdit } className="default_inputbtn z_edit_btn">编辑</span>
                              </label>
                          </div>
                        </div>)
             }else if(edit){
                 return (<div className="time z_time_edit">
                          <div className="z_time_btn">

                            <p>
                                <b>更新记录：</b>
                                <select onChange={ changeEditTime }>
                                     {teeth_status.allUserTeeth[teeth_status.teeth_ui.useridx].map((teeth)=>{
                                     	return (<option value={ index }>{teeth.time}</option>)
                                     })}
                                </select>
                            </p>
                            <label>
                                <span onClick={ toCheck } className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }else if(add){
             	return (<div className="time z_time_edit">
                          <div className="z_time_btn">
                            <p>
                                <em className="see_page_em">基于最新（<font className="new_time">{addTime}</font>）信息上进行添加</em>
                            </p>
                            <label>
                                <span onClick={toCheck} className="default_inputbtn z_save_btn">保存</span>
                            </label>
                          </div>
                        </div>)
             }

}