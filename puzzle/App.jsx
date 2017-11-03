import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    console.log(this)
    var i, data = [];
    for(i = 0; i < 8; i++){
      data[i] = i + 1;
    }
    this.state = {
      // data:[2,5,3,1,6,8,4,7],
      data:shuffle(data),
      positions:[[0, 0], [30, 0], [60, 0],
                [0, 30], [30, 30], [60, 30],
                [0, 60], [30, 60], [60, 60]],
      gridStatus:[1,1,1,1,1,1,1,1,0],
      empty:8,
      moves:{
        0:[1, 3],
        1:[0, 2, 4],
        2:[1, 5],
        3:[0, 4, 6],
        4:[1, 3, 5, 7],
        5:[2, 4, 8],
        6:[3, 7],
        7:[4, 6, 8],
        8:[5, 7]
      }
    }
    this.tileMoved = this.tileMoved.bind(this);
  }
  tileMoved(e){
    this.setState({
      empty:e.value
    })
  }
  render() {
    let d = [];
    this.state.data.forEach((value, i)=>{
      d.push(<Tile key={i} color="red" number={value} value={i} positions={this.state.positions} moves={this.state.moves} empty={this.state.empty} movecallback={this.tileMoved}>
      
      </Tile>)
    }, this);
    return(
      d
    )
  }
}

export default App;

class Tile extends React.Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);

    this.state = {
      value:0
    }
  }
  onClick(e){
    var value = this.state.value, moves = this.props.moves[value], empty = this.props.empty;
    console.log(value, moves,empty);
    if(moves.indexOf(empty) != -1){
      this.setState({
        value:empty
      });
      // this.props.value = empty;
      this.props.movecallback({value:value});
    }
  }
  componentDidMount(){
    console.log(this.props);
    this.setState({value:this.props.value});
  }
  render() {
    const value = this.state.value;
    return(
      <div className="Tile" style={{color: this.props.color, left:this.props.positions[value][0], top:this.props.positions[value][1]}} onClick={this.onClick}>
        {this.props.number}
      </div>
    )
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}