import React from 'react';
const MyOrderInfo = React.createClass({
    propTypes: {
        appointment_name:  React.PropTypes.string.isRequired,
        reserve_number: React.PropTypes.number.isRequired,
        contact_tel: React.PropTypes.string.isRequired,
        visit_time: React.PropTypes.string.isRequired,
        company_name: React.PropTypes.string.isRequired,
        doctor_name: React.PropTypes.string.isRequired,
        clinic_name: React.PropTypes.string.isRequired,
        project_name: React.PropTypes.string.isRequired,
        clinic_address: React.PropTypes.string.isRequired,
        status: React.PropTypes.number.isRequired,
        patient_name: React.PropTypes.string.isRequired,
        relations: React.PropTypes.string.isRequired,
        appointment_name: React.PropTypes.string.isRequired,
        contact_tel: React.PropTypes.string.isRequired
    },
    handleProClick(event){

        

    },
    render() {

                            var status_class;
                            var status_html;
                            var cancel_button = {};
                            (function(){         
                            if(this.props.status == 1){
                            status_class = 'yuyuehzong';
                            status_html = '已预约'
                            cancel_button =  (<div className="demos-content-padded btnbox" id="quxiaoBut" style={{display:"none"}}>
                            <a href="javascript:'" className="price_confirm" id="confirm" onClick={this.handleProClick} style={{marginTop:"20px"}}>取消预约</a>
                            </div>)
                            }else if(result.Data.data.status == 2){
                            status_class = 'wancheng';
                            status_html = '已完成'
                            }else if(result.Data.data.status == 3){
                            status_class = 'guoqi'
                            status_html = '已过期'
                            }else if(result.Data.data.status == 4){
                            status_class = 'quxiao'
                            status_html = '已取消'
                            }else if(result.Data.data.status == 5){
                            status_class = 'queren'
                            status_html = '已确认'
                            }
                            }());
                            
                            return (<div>
                            <div className="myOrderdescbox">
                            <div className="weui_cells" style={{borderTop:"1px #e5e5e5 solid"}}>
                            <a className="weui_cell" href="javascript:;">
                            <div className="weui_cell_hd">
                            <p><span>就诊时间：</span><font id="visit_time">{this.props.visit_time}</font></p>
                            <em id="status" className={status_class}>{status_html}</em>
                            </div>
                            </a>
                            </div>
                            </div>
                            <div className="orderDescContain" style={{borderTop:"none"}}>
                            <p><b>预约项目：</b><span id="project_name">{this.props.project_name}</span><em className="clear"></em></p>
                            <p><b>预约编号：</b><span id="reserve_number">{this.props.reserve_number}</span><em className="clear"></em></p>
                            <p><b>预约医生：</b><span id="doctor_name">{this.props.doctor_name}</span><em className="clear"></em></p>
                            <p><b>预约诊所：</b><span id="clinic_name">{this.props.clinic_name}</span><em className="clear"></em></p>
                            <p><b>诊所地址：</b><span id="clinic_address">{this.props.clinic_address}</span><em className="clear"></em></p>
                            </div>
                            <div className="orderDescContain" id="isselfDiv" style={{marginTop:"10px",display:"none"}}>
                            <p><b>就&nbsp;&nbsp;诊&nbsp;人：</b><span id="patient_name">{this.props.patient_name}</span><em className="clear"></em></p>
                            <p><b>与我关系：</b><span id="relations">{this.props.relations}</span><em className="clear"></em></p>
                            </div>
                            <div className="orderDescContain" style={{marginTop:"10px"}}>
                            <p id="apBox"><b></b><span id="appointment_name">{this.props.appointment_name}</span><em className="clear"></em></p>
                            <p><b>联系电话：</b><span id="contact_tel">{this.props.contact_tel}</span><em className="clear"></em></p>
                            <p><b>所属公司：</b><span id="company_name">{this.props.company_name}</span><em className="clear"></em></p>
                            </div>
                            {cancel_button}
                            <div className="opcitybox" style={{display:"none"}}><span></span></div>
                            <div id="toast" style={{display:"none"}}>
                            <div className="weui_mask_transparent"></div>
                            <div className="weui_toast">
                            <i className="weui_icon_toast"></i>
                            <p className="weui_toast_content">取消成功</p>
                            </div>
                            </div>
                            </div>
                            );
                            }
});
module.exports = MyOrderInfo ;