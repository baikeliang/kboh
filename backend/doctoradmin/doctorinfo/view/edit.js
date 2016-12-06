import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import Calendar from 'rc-calendar';

const format = ('YYYY-MM-DD');

export const EditDoctor = ({
    change,
	name,
	sex,
	is_show,
	birthdate,
	age,
	position,
	hospital,
	field,
	job_age,
	context,
	phone,
	account,
	photo,
	service_name_arr,
	label_arr,
    chooseBirth,
	handleSelectDate,
	toEdit,
    click,
    detail,
    projects,
    showBirthCalendar,
    dateModal
}) => {
       return (<div>
			        <div className="rtop rtop4">
			            <div className="but-box bj-none">
			              <p>
			                <a href="javascript:void(0)" className="back-but" id="back">返回</a>
			                <a href="javascript:void(0)" className="save-but" id="save-but">保存</a>
			              </p>
			            </div>
			        </div>
			        <div className="add-box-container">
			            <div className="add-h3 add-main-box1 mtop45">
			                <h3 className="box5-h3">基本信息<span></span></h3>
			                <div className="main-input">
			                    <div className="input-box h30">
			                        <span>是否显示：</span>
			                        <div className="radio-box" id="is_show">
			                            <span><input type="radio" className="radio1" name="radiov" id="checkboxvv" value="1" checked={is_show=='1'?'checked':''}/><label htmlFor="checkboxvv"></label>是</span>
			                            <span><input type="radio" className="radio1" name="radiov" id="checkboxww" value="2" checked={is_show=='0'?'checked':''}/><label htmlFor="checkboxww"></label>否</span>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">账号：</em></span>
			                        <input type="text" value={phone} className="text-input"  onChange={(ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'phone')}} maxLength="11" />
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">医生姓名：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'name')} } type="text" className="text-input" id="name"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h65">
			                        <span>医生头像：</span>
			                        <div className="touxiang" id="logo"><img src={"../../images/user.png"} alt=""/></div>
			                        <div className="but-input uppic-input"><input type="file" id="file2" className="but-input upfile-butt"/>上传头像</div>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>性别：</span>
			                        <div className="radio-box" id="sex">
			                            <span><input type="radio" className="radio1" name="radio2" id="doctor_checkbox10" value="1" checked={sex=='1'?'checked':''}/><label htmlFor="checkbox10" onClick={(e)=>{ click(e,'sex','1')}}></label>男</span>
			                            <span><input type="radio" className="radio1" name="radio2" id="doctor_checkbox11" value="2" checked={sex=='2'?'checked':''}/><label htmlFor="checkbox11" onClick={(e)=>{ click(e,'sex','2')}}></label>女</span>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>出生年月：</span>
			                        <input value={ birthdate } type="text" className="text-input layicon" readonly="readonly" onClick={ showBirthCalendar }/>
			                        <p></p>
			                    </div>
			                    <div style={{position:'relative'}}>
			                    	<div style={ {...dateModal,marginLeft:'150px'} }>
                                      <Calendar format={'YYYY-MM-DD'} onSelect={ chooseBirth }/>
                                    </div>
			                    </div>
			                    <div className="input-box h30">
			                        <span>年龄：</span>
			                        <input value={ age } type="text" className="text-input" readonly="readonly"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">职称：</em></span>
			                        <input onChange={(ev)=>{ change(ev,'position') }}  type="text" className="text-input" id="position"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">所在医院：</em></span>
			                        <input onChange={(ev)=>{ change(ev,'hospital') }} type="text" className="text-input" id="hospital"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">服务项目：</em></span>
			                        <div className="checkbox-box" style={ { maxWidth:'900px',marginBottom:'10px' } }>
			                          <div className="checkBone" id="service_ids">
			                            {
			                            	projects?projects.map((project)=>{
		                                           return (<span>
			                                                <input type="checkbox" className="checkbox" id={ 'checkbox_n_' + project.id  } value={ project.id }/>
			                                                <label htmlFor={ 'checkbox_n_' + project.id  }>
			                                                </label>
			                                                {project.name}
			                                              </span>)
			                                        }):''}
			                          </div>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">擅长领域：</em></span>
			                        <input onChange={(ev)=>{change(ev,'field') }} type="text" className="text-input" id="field"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>执业年限：</span>
			                        <input onChange={ (ev)=>{ change(ev,'job_age')} } type="text" className="text-input" id="job_age"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">背景：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'context') }} type="text" className="text-input" id="context"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">出诊时间：</em></span>
			                        <a href="javascript:;" className="timesethover" id="timesetbut">坐诊时间安排</a>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">手机：</em></span>
			                        <input type="text" value={phone} className="text-input"  onChange={(ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'phone')}} maxLength="11" />
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>密码：</span>
			                        <input onChange={(ev)=>{ change(ev,'password')}} type="password" className="text-input" id="password" placeholder="6～20个字符"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>标签：</span>
			                        <div className="checkbox-box" style={{width:'900px',marginBottom:'10px'}}>
			                          <div className="checkBone" id="tag_name">
			                          </div>
			                            <div className="countryInput">
			                              <input type="button" value="添加" className="addCbut"/>
			                              <em className="Countryhide">
			                                <input type="text" className="cuontryval"/>
			                                <input type="button" value="完成" className="addCountry"/>
			                              </em>
			                            </div>
			                        </div>
			                        <p className="errorTip"></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>邀请码：</span>
			                        <input type="text" className="text-input" id="invite_code" readonly="" value="" disabled="" style={ {cursor:'notAllowed',textAlign:'center',padding:'0px'} }/>
			                        <p></p>
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className="opacity-timetipbox" id="timeTipbox" style={{display:detail?'block':'none'}}>
					  <div className="calendarboxmain Mtop245">
					      <h4 className="toph4" style={{margin:'0px'}}><b>坐诊时间设置</b><span className="close_dialog"></span></h4>
					      <div className="doc_clinic_address">
					        <span>出诊诊所：</span>
					        <select id="clinicList">
					        </select>
					      </div>
					      <div style={{borderBottom:'1px #ccc solid',margin:'auto'}}>
                             <Calendar format={format}  style={{margin:'auto'}} onChange={ handleSelectDate }/>
					      </div>
					      <div className="timeboxmain-select">
					        <div className="timechoose" id="timechoose"></div>
					      </div>
					      <div className="timeset_btom_btn">
					        <div className="new-creatbut-box">
					            <a href="javascript:;" className="but butgray" id="quxiao_btn">取 消</a>
					            <a href="javascript:;" className="but butblue confirm-add" id="confirm-but">确 定</a>
					        </div>
					      </div>
					      <input id="date" type="text" style={{opacity:'0'}}/>
					  </div>
					</div>
			    </div>)

}