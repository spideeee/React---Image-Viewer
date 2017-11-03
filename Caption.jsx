import React from "react";

class Caption extends React.Component{
    render(){
        
        const style = {};
        if(!this.props.gridView){
            style.width = "73%";
            style.height = "100%";
            style.right = "0px";
            style.padding = "5px";
        }
        
        return (
            <div style={style} className="caption">
                Name: {this.props.name}<br/>
                Type: {this.props.type}
            </div>
        )
    }
}

export default Caption;