import React from 'react';
const MyCaseDesc = React.createClass({
    propTypes: {
        tooth_pic:React.PropTypes.string.isRequired,
        tooth_square:React.PropTypes.number.isRequired,
        tooth_type:React.PropTypes.number.isRequired,
        tooth_suggestion:React.PropTypes.string.isRequired
    },
    handleProClick(event){
        
         
    },
    render() {

                        return  (<div className="yabj">
                        <h6 className="yaToptitle">薄荷牙医诊断报告</h6>
                        <h4 className="preyatitle"><span>牙体和外科情况</span></h4>
                        <div className="yaDescpic" id="tooth_pic">
                        <img src={this.props.tooth_pic} alt=""/>
                        </div>
                        <h4 className="preyatitle"><span>牙周情况</span></h4>
                        <div className="tooth_aroundbox" id="tooth_type">
                        <dl>
                        <dt className={(this.props.tooth_type==1)?"cur":""}><p><img src={require('app/common/images/ya1.png')} alt=""/></p></dt>
                        <dd><p>牙龈炎或牙周炎早期，牙龈红肿，牙槽骨没有或刚刚开始少量流失</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt className={(this.props.tooth_type==2)?"cur":""}><img src={require('app/common/images/ya2.png')} alt=""/></dt>
                        <dd><p>牙周炎中期，牙龈红肿，牙槽骨有明显流失，牙缝开始变大，消肿后牙龈退缩明显</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt className={(this.props.tooth_type==3)?"cur":""}><img src={require('app/common/images/ya3.png')} alt=""/></dt>
                        <dd><p>牙周炎晚期，开始变身“常牙怪”——牙槽骨流失进一步加重，牙龈退缩更明显，牙齿被动“变长”，并开始松动</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt className={(this.props.tooth_type==4)?"cur":""}><img src={require('app/common/images/ya4.png')} alt=""/></dt>
                        <dd><p>你可以去拔牙了！牙医已经不想和你说话，并向你扔来一把拔牙钳，和你摇摇欲坠的牙齿</p></dd>
                        <span></span>
                        <div className="clear"></div>
                        </dl>
                        </div>
                        <h4 className="preyatitle"><span>牙列情况</span></h4>
                        <div className="tooth_around" id="tooth_square">
                        <dl>
                        {function(obj){
                            var ret;
                            switch (obj.props.tooth_square) {
                                case 1:
                                    // statements_1
                                    ret = <dt><img src={require('app/common/images/yapic_01.png')} alt=""/><span></span></dt>
                                    break;
                                case 2:
                                    ret = <dt className="cur"><img src={require('app/common/images/yapic_01.png')} alt=""/><span></span></dt>
                                    break;          
                                default:
                                    // statements_def
                                    break;
                            }
                        }(this)}
                        <dd>牙列不齐</dd>
                        <div className="clear"></div>
                        </dl>
                        <dl>
                        <dt><img src={require('app/common/images/yapic_02.png')} alt=""/><span></span></dt>
                        {function(obj){
                            var ret;
                            switch (obj.props.tooth_square) {
                                case 1:
                                    // statements_1
                                    ret = <dt className="cur"><img src={require('app/common/images/yapic_01.png')} alt=""/><span></span></dt>
                                    break;
                                case 2:
                                    ret = <dt><img src={require('app/common/images/yapic_01.png')} alt=""/><span></span></dt>
                                    break;          
                                default:
                                    // statements_def
                                    break;
                            }
                        }(this)}
                        <dd>牙列基本齐整</dd>
                        <div className="clear"></div>
                        </dl>
                        </div>
                        <h4 className="preyatitle"><span>综合意见</span></h4>
                        <div className="toothAllideas" id="tooth_suggestion">
                              {this.props.tooth_suggestion}
                        </div>
                        <div className="toothboxfoot">
                        <img src={require('app/common/images/ma.png')} alt=""/>
                        <p>薄荷牙医 © 2016</p>
                        </div>
                        </div>)
    }
}
);
module.exports = MyCaseDesc ;
