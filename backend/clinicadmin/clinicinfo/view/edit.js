import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import Calendar from 'rc-calendar';

const format = ('YYYY-MM-DD');

export const EditClinic = ({
    id,
    clinic_brand,
    clinic_name,
    clinic_address,
    chair_nums,
    clinic_head_name,
    clinic_head_phone,
    mint_head_name,
    rowidx,
    mint_head_phone,
    toUserInfo,
    is_show,
    bus_line,
    told_word,
    set_date,
    staff_nums,
    account,
    clinic_pic,
    around_pic,
    remark
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
			                        <span><em className="emx">诊所品牌：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'clinic_brand')} } type="text" className="text-input" placeholder="欢乐口腔 / 瑞尔口腔 / 瑞泰口腔"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">诊所名称：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'clinic_name')} } type="text" className="text-input" placeholder="" id="clinic_name"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">诊所地址：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'clinic_address')} } type="text" className="text-input" placeholder="" id="clinic_address"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h65">
			                        <span>乘车路线：</span>
			                        <textarea onChange={ (ev)=>{ change(ev,'bus_line')} } name="" className="text-input" placeholder="" id="bus_line"></textarea>
			                        <p></p>
			                    </div>
			                    <div className="input-box h65">
			                        <span>嘱咐说明：</span>
			                        <textarea onChange={ (ev)=>{ change(ev,'told_word')} } name="" className="text-input" placeholder="" id="told_word"></textarea>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">牙椅数量：</em></span>
			                        <input onChange={ (ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'chair_nums')} } type="text" className="text-input" id="chair_nums" placeholder="只能输入数字"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>诊所负责人：</span>
			                        <input onChange={ (ev)=>{ change(ev,'clinic_head_name')} } type="text" className="text-input" id="clinic_head_name"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>负责人电话：</span>
			                        <input onChange={(ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'clinic_head_phone')}} type="text" className="text-input" id="clinic_head_phone"  maxLength="11" />
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>薄荷对接人：</span>
			                        <input onChange={ (ev)=>{ change(ev,'mint_head_name')} }type="text" className="text-input" id="mint_head_name"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span>对接人电话：</span>
			                        <input onChange={ (ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'mint_head_phone')} } type="text" className="text-input" id="mint_head_phone" maxLength="11" />
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">成立时间：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'set_date')} } type="text" className="text-input layicon" id="set_date" readonly/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">员工人数：</em></span>
			                        <input onChange={ (ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'staff_nums')} } type="text" className="text-input" id="staff_nums"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">诊所账号：</em></span>
			                        <input onChange={ (ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'account')} } type="text" className="text-input" placeholder="请输如您的手机号" id="account" maxLength="11"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box h30">
			                        <span><em className="emx">密码：</em></span>
			                        <input onChange={ (ev)=>{ change(ev,'password')} } type="password" className="text-input" placeholder="请输入您的密码（6-20）位" id="password"/>
			                        <p></p>
			                    </div>
			                    <div className="input-box" style={{ position:'relative',marginTop:'20px'}}>
			                        <span><em className="emx">诊所资质：</em></span>
			                        <div className="file-main-box pic_file_pic" id="clinic_pic">
			                            <div className="upfile-box">
			                                <div id="picUpfile1"></div>
			                                <div className="parentFileBox">
			                                    <ul className="fileBoxUl">
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                        <label className="tip_wrong">图片建议尺寸：3:2</label>
			                        <p className="wrongfiletip wrongfiletip1"></p>
			                        <div className="clear"></div>
			                    </div>
			                    <div className="input-box" style="position:relative;margin-top:20px;">
			                        <span><em className="emx">环评资质：</em></span>
			                        <div className="file-main-box pic_file_pic" id="around_pic">
			                            <div className="upfile-box">
			                                <div id="picUpfile2"></div>
			                                <div className="parentFileBox">
			                                    <ul className="fileBoxUl">
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                        <label className="tip_wrong">图片建议尺寸：3:2</label>
			                        <p className="wrongfiletip wrongfiletip2"></p>
			                        <div className="clear"></div>
			                    </div>
			                    <div className="input-box h30">
			                        <span>排序：</span>
			                        <input onChange={ (ev)=>{ ev.target.value=ev.target.value.replace(/\D/g,''); change(ev,'sort')} } type="text" className="text-input" id="sort" maxLength="11" />
			                        <p></p>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </div>)

}