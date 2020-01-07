import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Decrement extends Component{
  constructor(props){
    super(props)
    this.state = {
      count:props.num
    }
    this.decrementNum = this.decrementNum.bind(this)
  }

  decrementNum(){
    if(this.state.count > 0){
      this.setState({count:this.state.count - 1})
    }else{
      alert("Cannot be less than zero")
    }
  }

  render(){
    return <div className = "card">
              <button onClick={this.decrementNum}> Decrement </button>
              <p> {this.state.count} </p>
           </div>
  }
};

Decrement.propTypes = {
  num:PropTypes.number.isRequired
}


function App() {
  return <div>
            <Decrement num={12}/>
         </div>
}

export default App;
