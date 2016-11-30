import React, { Component } from 'react';
import ReactDOM  from 'react-dom'



export const UserData = ({
    id,
    account,
    real_name,
    photo,
    birth,
    age,
    card_id,
    sex,
    phone,
    email,
    company_name,
    create_time,
    rowidx,
    toUserInfo
}) => {
      return ( <tr>
                  <td><span className="radio-span">
                  <input type="radio" className="radio" name="radio" id={'userlist_row_'+rowidx}/>
                  <label htmlFor={'userlist_row_'+rowidx}></label></span></td>
                  <td className="W100">
                      <span onClick={(ev)=>{toUserInfo(ev,rowidx,id)}} className='spanName'>{account}</span>
                  </td>
                  <td><span>{real_name}</span></td>
                  <td><span className="user-pic"><img src={((!photo)||(photo=='ssssss'))?require('backend/common/images/user_default.png'):photo} alt/></span></td>
                  <td><span>{birth}</span></td>
                  <td><span>{age}</span></td>
                  <td className="W150"><span>{card_id}</span></td>
                  <td><span>{sex}</span></td>
                  <td><span>{phone}</span></td>
                  <td><span>{email}</span></td>
                  <td className="W150"><span>{company_name}</span></td>
                  <td className="W100"><span>{create_time}</span></td>
                </tr>
            )
     }

