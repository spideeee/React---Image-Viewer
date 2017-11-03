import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (<div id="header">
      <div 
        id="gridBtn" 
        className={(this.props.gridView ? "selected" : "") + " button"}
        onClick={(e)=>{this.props.onClick(true);console.log(true)}}>
      </div>
      <div 
        id="listBtn" 
        className={(!this.props.gridView ? "selected" : "") + " button"}
        onClick={(e)=>{this.props.onClick(false);console.log(false)}}>
      </div>
    </div>)
  }
}

Header.propTypes = {
  gridView:PropTypes.bool.isRequired,
  onClick:PropTypes.func.isRequired
}

export default Header;