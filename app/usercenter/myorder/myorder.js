import React from 'react';
const MyOrder = React.createClass({
    propTypes: {
        is_return: React.PropTypes.number.isRequired,
        patient_name: React.PropTypes.string.isRequired,
        service_name: React.PropTypes.string.isRequired,
        reserve_number: React.PropTypes.string.isRequired,
        visit_time: React.PropTypes.string.isRequired,
        status: React.PropTypes.number.isRequired,
        id:React.PropTypes.number.isRequired

    },
    handleProClick(event){
        
         
    },
    render() {

                        return  (<div> <div className="weui_cells weui_cells_access">
                        <a className="weui_cell" onClick={this.handleProClick}>
                        <div className="weui_cell_hd">
                        <p>
                        {function(){
                        if (is_return == 0) {
                        return <b> {this.props.patient_name} <em> {this.props.service_name} </em></b>
                        } else {
                        return <b> {this.props.patient_name} <em> {this.props.service_name} - 复诊</em></b>
                        }
                        }()}
                        <label>预约编号：{this.props.reserve_number} </label>
                        <label>就诊时间：<span>{this.props.visit_time}</span></label>
                        </p>
                        {function(){
                            var ret;
                            switch (this.props.status) {
                                case 1:
                                    // statements_1
                                    ret = <i className="yuyuezhong">已预约</i>;
                                    break;
                                case 2:
                                    ret = <i className="wanchen">已完成</i>;
                                    break;
                                case 3:
                                    ret = <i className="guoqi">已过期</i>;
                                    break;
                                case 4:
                                    ret = <i className="quxiao">已取消</i>;
                                    break;            
                                default:
                                    // statements_def
                                    break;
                            }
                            return ret;
                        }()}
                        </div>
                        <span className="weui_cell_ft"></span>
                        </a>
                        </div>
                        </div>)
    }
});
module.exports = MyOrder ;
