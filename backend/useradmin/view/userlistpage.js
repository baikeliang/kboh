import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

import { UserData as UserRow } from './userdata.js'

import ReactPaginate from 'react-paginate';

export const UserList = ({
	   data,
	   nodata,
     length,
     toAddUser,
     toDeleteUser,
     toEditUser,
     toUserInfo,
     handlePageClick,
     pageNum
     }) => {
	    var  rowidx=0;
      return (<div>
                 <div className="rtop rtop2">
                   <div className="but-box">
                     <p>
                       <a onClick={toAddUser} className="add-but">新建</a>
                       <a onClick={toDeleteUser} className="edit-but">修改</a>
                       <a onClick={toEditUser} className="delete-but">删除</a>
                     </p>
                   </div>

                 <div className="top-input-box">
                   <p>真实姓名：<input type="text" id="real_name"/></p>
                   <p>账号：<input type="text" id="account"/></p>
                   <p>所在公司：<input type="text" id="company_name"/></p>
                   <p>
                     <a href="javascript:void(0)" className="search-but" id="search">搜索</a>
                     <a href="javascript:void(0)" className='reset-but' id="reset">重置</a>
                   </p>
                 </div>
                </div>
                <div className="table-box">
                <table className="table table-bordered table-hover table-height table-height4 mtop100 Mbtom50 poolTable">
                <thead>
                  <tr>
                    <th width="60px">选择</th>
                    <th>账号</th>
                    <th>真实姓名</th>
                    <th>头像</th>
                    <th>出生日期</th>
                    <th>年龄</th>
                    <th>身份证</th>
                    <th>性别</th>
                    <th>联系电话</th>
                    <th>Email</th>
                    <th>所在公司</th>
                    <th width="80px">注册时间</th>
                  </tr>
               </thead>
               <tbody id="accountTbody">
                  {data.map((row)=>{
                  	var ret = UserRow({...row,rowidx,toUserInfo});
                  	rowidx++;
                  	return ret;
                  })}
               </tbody>
               </table>
               <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a>...</a>}
                       breakClassName={"break-me"}
                       pageNum={110}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       clickCallback={ handlePageClick }
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
               </div>
               </div>)
}

