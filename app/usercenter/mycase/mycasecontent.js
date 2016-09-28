import React from 'react';
const MyCaseContent = React.createClass({
    propTypes: {
        visit_time: React.PropTypes.string.isRequired,
        type: React.PropTypes.number.isRequired,
        id:React.PropTypes.number.isRequired,
        patient_name: React.PropTypes.string.isRequired,
        doctor_name: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        record_content: React.PropTypes.string.isRequired

    },
    handleProClick(event){

         
    },
    render() {
                return  (<div>
                <div className="CaseContentbox">
                <div className="orderDescContain CaseContent noborder" >
                <h3><span>{this.props.patient_name}</span></h3>
                <p><b>问诊时间</b><span>{this.props.visit_time}</span><em className="clear"></em></p>
                <p><b>主治医生</b><span>{this.props.doctor_name}</span><em className="clear"></em></p>
                {function(obj){
                    if(obj.props.clinic_name == '' || obj.props.clinic_name == null)
                        return <p style="display:none"><b>诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所</b><span>{obj.props.clinic_name}</span><em className="clear"></em></p>
                    else
                        return <p><b>诊&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所</b><span>{obj.props.clinic_name}</span><em className="clear"></em></p>

                }(this)}
                
                <p><b>病历类型</b><span>{function(obj){
                          if(obj.props.type == 1){
                            return '初诊建档'
                          }else if(this.props.type == 2){
                            return '牙体牙周'
                          }else{
                            return ''
                          }
                }(this)}</span><em className="clear"></em></p>
                <p style={{display:"none"}}><b>病历内容：</b><em className="clear"></em></p>
                <div className="caseText" style={{margin-top:"5px",display:"none"}}>
                <div className="record_content">
                {this.props.record_content.split("\n").join("<br />")}
                </div>
                </div>  
                </div>
                </div>
                <div className="caseFiletab" id="caseDetailtab" style={{margin-top:0,margin-bottom:"10px"}} >
                <div className="weui_cells weui_cells_access">
                <a className="weui_cell" href="javascript:;">
                <div className="weui_cell_hd">
                <p>病历详情</p>
                <span id="name"></span>
                </div>
                <span className="weui_cell_ft"></span>
                </a>
                </div>
                </div>
                <div className="caseFiletab" id="Filetab" style={{margin-top:0,margin-bottom:"20px",display:"none"}} >
                <div className="weui_cells weui_cells_access">
                <a className="weui_cell" href="javascript:;">
                <div className="weui_cell_hd">
                <p>附件</p>
                <span id="name"></span>
                </div>
                <span className="weui_cell_ft"></span>
                </a>
                </div>
                </div>
                </div>)
                }
});
module.exports = MyCaseContent ;