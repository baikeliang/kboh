import React, { Component } from 'react';
import ReactDOM  from 'react-dom'


export const CheckOrder = ({
	patient_name,
	appointment_name,
	contact_tel,
	is_self,
	company_name,
	project_name,
	visit_time,
	doctor_name,
	doctor_phone,
	clinic_name,
	remark,
	toEdit
}) => {
       return (<div>
			        <div className="rtop rtop4">
			            <div className="but-box bj-none">
			              <p>
			                <a href="javascript:void(0)" className="back-but" id="back">返回</a>
			                <a onClick={toEdit} className="edit-but" id="edit-but">编辑</a>
			              </p>
			            </div>
			        </div>
			          <div className="add-box-container" style={{minHeight:'500px'}}>
			            <div className="add-h3 add-main-box1 mtop45">
			              <h3 className="box5-h3">基本信息<span></span></h3>
			                <div className="main-input">
			                    <div className="input-box h30 gray-span">
			                        <span>就诊人姓名：</span>
			                        <div className="see-main">{patient_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>预约人姓名：</span>
			                        <div className="see-main">{appointment_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>联系方式：</span>
			                        <div className="see-main">{contact_tel}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>是否本人：</span>
			                        <div className="see-main">{is_self}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>所属公司：</span>
			                        <div className="see-main">{company_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>服务项目：</span>
			                        <div className="see-main">{project_name}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>预约日期：</span>
			                        <div className="see-main">{visit_time}</div>
			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>医生：</span>
			                        <div className="see-main"><label>{doctor_name+'('+doctor_phone+')'}</label><a href="javascript:;" className="checktimea">查看医生的出诊时间</a></div>

			                    </div>
			                    <div className="input-box h30 gray-span">
			                        <span>诊所：</span>
			                        <div className="see-main">{clinic_name}</div>
			                    </div>


			                    <div className="input-box h30 gray-span">
			                        <span>备注：</span>
			                        <div className="see-main">{remark}</div>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </div>)

}