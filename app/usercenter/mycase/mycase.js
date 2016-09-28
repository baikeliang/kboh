import React from 'react';
const MyCase = React.createClass({
    propTypes: {
        visit_time: React.PropTypes.string.isRequired,
        type: React.PropTypes.number.isRequired,
        id:React.PropTypes.number.isRequired

    },
    handleProClick(event){
        
         
    },
    render() {

                                return  (<div className="weui_cells weui_cells_access">
                                <a className="weui_cell" onClick={this.handleProClick}>
                                <div className="weui_cell_hd">
                                <p><b>{this.props.visit_time}</b></p>
                                {function(){
                                    if(this.props.type == 1)
                                     return <span>初诊建档</span>
                                    else if(this.props.type == 2)
                                     return <span>牙体牙周</span>
                                }()}
                                </div>
                                <span className="weui_cell_ft"></span>
                                </a>
                                </div>)
    }
});
module.exports = MyCase ;
