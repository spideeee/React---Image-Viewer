import React from 'react';
import Header from './Header.jsx';
import Wrapper from './Wrapper.jsx';
import ImageView from './ImageView.jsx';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      gridView:true,
      imageView:false
    }
    this.changeView = this.changeView.bind(this);
    this.onThumbClick = this.onThumbClick.bind(this);
    this.onViewClose = this.onViewClose.bind(this);
  }
  onThumbClick(imageView){
    this.setState({imageView});
  }
  onViewClose(imageView){
    // imageView = !!imageView;
    this.setState({imageView:false});
  }
  changeView(gridView){
    this.setState({gridView});
  }
  render() {
    const {gridView, imageView} = this.state;
    console.log(imageView)
    return (
      <div>
        <Header gridView = {gridView} onClick={this.changeView}></Header>
        <Wrapper gridView = {gridView} onThumbClick={this.onThumbClick}></Wrapper>
        {imageView ? <ImageView data={imageView} onClose={this.onViewClose}></ImageView> : null}
      </div>
    )
  }
}

export default App;