import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Tile from "./Tile.jsx";

const tileHeights = {
    grid:"150px",
    list:"50px"
}

const tileWidths = {
    grid:"150px",
    list:"200px"
};

class Wrapper extends React.Component{
    constructor(){
        super();
        this.componentDidMount = this.componentDidUpdate = this.updateWrapperWidth = this.updateWrapperWidth.bind(this);
        window.addEventListener("resize", this.updateWrapperWidth)
    }
    get wrapperWidth(){
        const height = this.elem.offsetHeight;
        const tileHeight = parseInt(tileHeights[this.props.gridView ? "grid" : "list"]) + 10;
        const cols = Math.floor(height / tileHeight);
        const width = (parseInt(tileWidths[this.props.gridView ? "grid" : "list"]) + 10) * Math.round(list.length / cols);
        return width;
    }
    updateWrapperWidth(){
        const width = this.wrapperWidth;
        ReactDOM.findDOMNode(this.elem).style.width = width + "px";
    }
    render(){
        const imgList = list.map((src, i)=>{
            return <Tile onThumbClick={this.props.onThumbClick} gridView={this.props.gridView} key={i} imgSrc={"images/" + src}></Tile>
        })
        
        return (<div id="wrapper">
            <div id="scrollDiv" ref={(div)=>{this.elem = div}}>
                {imgList}
            </div>
        </div>)
    }
}

Wrapper.propTypes = {
    gridView:PropTypes.bool.isRequired
}

const list = [
    "react.png",
    "angular.png",
    "javascript.jpg",
    "html5.png",
    "css.png",
    "react.png",
    "angular.png",
    "javascript.jpg",
    "html5.png",
    "css.png",
    "react.png",
    "angular.png",
    "javascript.jpg",
    "html5.png",
    "css.png",
    "react.png",
    "angular.png",
    "javascript.jpg",
    "html5.png",
    "css.png",
    "react.png",
    "angular.png",
    "javascript.jpg",
    "html5.png",
    "css.png",
    "react.png",
    "angular.png",
    "javascript.jpg",
    "html5.png",
    "css.png"
]

export default Wrapper;