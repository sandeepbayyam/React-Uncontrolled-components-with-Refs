import React from "react";
import "./style.css";

class App extends React.Component{
  constructor(){
    super();
    this.myref = React.createRef();
  }
  shwoText=()=>{
    var name = this.myref.current.value;
    document.getElementById('d2').innerHTML = name;
  }
  render(){
    return(
      <div>
        <h2>Uncontrolled Component with ref</h2>
        <label> NAME : </label>
        <input type='text' ref={this.myref}/>
        <button onClick={this.shwoText}>Show</button>
        <h3 id='d2'></h3>
      </div>
    )
  }
}

export default  App;
 
