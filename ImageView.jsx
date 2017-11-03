import React from "react";

class ImageView extends React.Component{
    render(){
        return (
            <div id="modal">
                <div id="title">{this.props.data.name}</div>
                <div id="close" onClick={this.props.onClose}>×</div>
                <img src={this.props.data.src}/>
            </div>
        );
    }
}

export default ImageView;