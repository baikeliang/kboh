import React, { Component } from 'react';
import styles from './css/left_list.css'

export const LeftList = ({
    onClick,
    onClickToExpand,
    table
}) => {

    var itemsui = table.list.map((item)=>{
        var itemid_lv1 = item.id;

        if(item.children){
          return (<li className="cur" onClick={ (ev) =>{ onClickToExpand(ev,itemid_lv1); }}>
                    <label>
                     <a className={styles[item.classname]} href="#">
                     <b>{item.name}</b>
                     </a>
                     <i className={item.showchild?'roate':''}></i>
                     </label>
                      {item.showchild?item.children.map((child)=>{
                        var itemid_lv2 = child.id;
                        return (<li className="cur" onClick={ (ev) =>{onClick(ev,itemid_lv2);}}>
                                  <a className={styles['Clinicmain']} href="#" style={{paddingLeft:"62px"}}>
                                  <b>{child.name}</b>
                                  </a>
                                </li>)
                     }):''}
                  </li>)
        }else{
          return (<li className="cur" onClick={ (ev) =>{onClick(ev,itemid_lv1);}}>
                    <label>
                     <a className={styles[item.classname]} href="#">
                     <b>{item.name}</b>
                     </a>
                     </label>
                  </li>)
        }
    })

    return (<div className={styles["container-left"]}>
              <h3></h3>
              <ul className="cd-accordion-menu" id="left-list">
                {itemsui}
              </ul>
            </div>)

}