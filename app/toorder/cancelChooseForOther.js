import React from 'react';
import Projects from './projectsRender.js'
import wxstyles from 'app/common/css/weui.min.css'
import styles from 'app/common/css/style.css'

const CancelChooseForOther = React.createClass({
    render() {
                           return (
                           <div className={styles.choosetop} style={{marginTop:0,display:"none"}} id="choseBoxtop2">
                           <div className={styles.weui_cells}>
                           <div className={styles.weui_cell}>
                           <div className={styles.weui_cell_hd} style={{height:'25px'}}>
                           <p id="name2"></p>
                           <span id="phone2"></span>
                           </div>
                           <a className={styles.forOther} id="forOtherBtn_cancel" href="javascript:;">取消为他人预约</a>
                           </div>
                           </div>
                           </div>);
    }
});
module.exports = CancelChooseForOther;