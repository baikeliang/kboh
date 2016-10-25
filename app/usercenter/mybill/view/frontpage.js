import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import wxstyles from 'app/common/css/weui.min.css'
import jqwstyles from 'app/common/css/jquery-weui.css'
import styles from 'app/common/css/style.css'

import Hammer from 'react-hammerjs'

export const FrontPage = ({nodata,
   handlePan,
   options,
   renderItem,
   length
}) => {
        return (<div>
			    <div className={styles.myorderNodatabox} style={nodata?{display:"block"}:{display:"none"}}>
			       <dl>
			       <dt><img src={require('app/common/images/icon13.png')} alt=""/></dt>
			       <dd>您的病历将会放到这里<br/>方便日后查询</dd>
			       </dl>
			       <img src={require('app/common/images/logo.png')} alt="" className={styles.logobtom}/>
			    </div>
 				<Hammer direction={'DIRECTION_VERTICAL'} options={options}  onPan={ handlePan }>
				<div>  
				<div className={styles.myOrdermainbox} style={{overflow: 'scroll',height: '100%',marginTop:'10px'}}>           	
            	<ReactList ref="list" axis='y'
							itemRenderer={ renderItem }
							length={ length }
							type='uniform'
				/>
				</div>
				</div>
				</Hammer>
				</div>
    	       )
    }