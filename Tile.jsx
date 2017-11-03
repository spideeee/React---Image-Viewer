import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Caption from "./Caption.jsx";

class Tile extends React.Component{
    constructor(){
        super();
        this.state = {};
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    }
    mouseOver(e){
        // if(this.props.gridView){
            ReactDOM.findDOMNode(this.elem).style["background-size"] = "auto 120%";
        // } else {
            
        // }
    }
    mouseOut(e){
        // if(this.props.gridView){
            ReactDOM.findDOMNode(this.elem).style["background-size"] = "auto 100%";
        // }
    }
    componentDidMount(){
        const split = this.props.imgSrc.split("/").reverse()[0].split(".");
        const name = split[0];
        const type = split[1];
        this.setState({name, type});
    }
    render(){
        const style = {
            backgroundImage:"url(" + this.props.imgSrc + ")",
            backgroundPosition:this.props.gridView ? "center center" : "left center"
        }
        const type = this.state.type;
        const name = this.state.name;
        const src = this.props.imgSrc;
        return (
            <div 
                ref={(elem)=>{this.elem = elem}}
                style={style} 
                className={(this.props.gridView ? "grid" : "list") + " tile"} 
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
                onClick={()=>{this.props.onThumbClick({name, type, src})}}>
                <Caption name={this.state.name} type={this.state.type} imgSrc={this.props.imgSrc} gridView={this.props.gridView}></Caption>
            </div>
        )
    }
}

Tile.propTypes = {
    imgSrc:PropTypes.string.isRequired
}

export default Tile;