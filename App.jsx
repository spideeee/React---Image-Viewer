import React from 'react';
import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import ImageView from './ImageView.jsx';
import {Link} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      gridView:true
    }
    this.changeView = this.changeView.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
  }
  onThumbClick(e){
    console.log(e);
  }
  changeView(gridView){
    this.setState({gridView:gridView});
  }
  render() {
    const {gridView} = this.state;
    return (
      <div>
        <Header gridView = {gridView} onClick={this.changeView}></Header>
        <Wrapper gridView = {gridView} onThumbClick={this.onThumbClick}></Wrapper>
        {/* <ImageView></ImageView> */}
      </div>
    )
  }
}

export default App;