import React, { Component } from 'react';
import ReactDOM  from 'react-dom'

import {
    asyncConnect
} from 'redux-connect'

var ToothAche = ({ tooth,ache_list }) => {

      return (<div className={'H_teeth_position_list_margin_bottom'}>
                <label>
                  {'牙齿'+tooth.name+':'}
                </label>
                <p>
                   {tooth.ache.map((idx)=>{
                        return  <span className='H_teeth_position_list_margin'>
                                {ache_list[idx].name}
                                </span>
                                })
                   }
                </p>
             </div>)

}


var  TeethAche = ({ teeth_status }) => {
        var  teethui = [];
        teeth_status.teeth_ui.teeth.forEach((tooth)=>{
              if(tooth.ache.length)
                teethui.push(ToothAche({ tooth,ache_list:teeth_status.teeth_ui.ache_list}))
        });
        return  teethui;

}

export const TeethShow = ({
    teethtype,
    mteeth_status,
    cteeth_status,
    toMteeth,
    toCteeth
}) => {
      var height = window.innerHeight || document.documentElement.clientHeight
      return (
              <div className='userContain z_userContain_edit' style={{height:(height-260)+'px'}}>
              <div className='z_userContainMain'>
               <div className='containb_right' style={{ paddingBottom:"50px" }}>
               <div className="H_teeth_position" >
                 <div className="H_teeth_position_left">
                   <span onClick={ toMteeth } className="man active" id="mantab">成人牙位图</span>
                   <span onClick={ toCteeth } className="child" id="childtab">幼儿牙位图</span>
                 </div>
                 {
                   (teethtype=='M')?(<div>
                   <div className="H_teeth_position_pic">
                       {  mteeth_status.teeth_ui.teeth.map((tooth)=>{
                             return (<div className={'H_teeth_position_pic_same '+ 'H_teeth_position_pic_'+tooth.name} style={tooth.ache.length>0?{backgroundColor:'#cc6060'}:{backgroundColor:'#fafcff'}}>
                                          {tooth.name}
                                     </div>
                                )
                       })}
                   </div>
                   <div className="H_teeth_position_list">
                       {  TeethAche({teeth_status:mteeth_status}) }
                   </div>
                   </div>):(<div>
                   <div className="H_teeth_position_pic H_teeth_position_pic_son">
                        {  cteeth_status.teeth_ui.teeth.map((tooth)=>{
                             return (<div className={'H_teeth_position_pic_same '+ 'H_teeth_position_pic_'+tooth.name}>
                                          {tooth.name}
                                     </div>
                                )
                       })}
                   </div>
                   <div className="H_teeth_position_list">
                        {  TeethAche({teeth_status:cteeth_status}) }
                   </div>
                   </div>)
               }

               </div>
              </div>
              </div>
              </div>
            )
     }

