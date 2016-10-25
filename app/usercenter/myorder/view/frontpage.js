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
                        <dt><img src={require('app/common/images/pro12.png')} alt=""/></dt>
						<dd>您目前还没有进行任何预约</dd>
						</dl>
						<div className={styles.fotIcon}>
						<img src={require('app/common/images/logo2.png')} alt=""/>
						<p>轻快预约&nbsp;&nbsp;&nbsp;从“齿”简单</p>
						</div>
					</div>
					<Hammer direction={'DIRECTION_VERTICAL'} options={options}  onPan={ handlePan }>
					<div>
					<div className={styles.myOrdermainbox} style={{marginTop:'10px'}}>  
							<ReactList ref="list" axis='y'
							itemRenderer={ renderItem }
							length={ length }
							type='uniform'
							/>
					</div>
					</div>
					</Hammer>
		      </div>)
    }

    