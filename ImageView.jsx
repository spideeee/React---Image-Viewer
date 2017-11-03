import React from "react";

class ImageView extends React.Component{
    render(){
        return (
            <div id="modal">
                <div id="title">Abcd</div>
                <div id="close">×</div>
                <img src={this.props.src}/>
            </div>
        );
    }
}

export default ImageView;