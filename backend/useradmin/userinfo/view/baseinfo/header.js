import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

export const Header = ({
    backToUsers,
    toMedRecord,
    photo,
    realname,
    phone,
    age
}) => {
      return (
                <div className="rtop rtop_edit">
                    <div className="but-box bj-none">
                      <p>
                        <a onClick={backToUsers} className="back-but">返回</a>
                      </p>
                    </div>
                    <div className="userInfobox">
                        <dl>
                            <dt><img src={((!photo)||(photo=='ssssss'))?require('backend/common/images/user_default.png'):photo} alt=""/></dt>
                            <dd>
                                <h3><span>{realname}</span><span>{age}</span></h3>
                                <p>{phone}</p>
                            </dd>
                        </dl>
                        <a onClick={toMedRecord} className="default_inputbtn see-but">查看病历</a>
                    </div>
                </div>
            )
     }

