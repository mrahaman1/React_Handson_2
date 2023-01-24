import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  state = {
    Name1 :"",
    Department :"",
    Rating :"",
    employee:[]


  };
 changeHandler=(e)=>{
    this.setState({[e.target.name] : e.target.value});
    console.log(this.state)
  }

  submitHandler = (e)=>{
    e.preventDefault();
    console.log("click event")
    const empObj = {
      Name:this.state.Name1,
      Department : this.state.Department,
      Rating: this.state.Rating
    }
    const arr= this.state.employee;
    arr.push(empObj);
    this.setState({employee : arr})
  }

  render() {
    return (
      <div>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
    <div className='container'>
  

        <form>
          <label htmlFor="Name1">Name:</label>
          <input className='form' type="text" name="Name1" value={this.state.Name1}  onChange={this.changeHandler}></input><br/>
          <label htmlFor="">Department:</label>
          <input className='form' type="text" name="Department" value={this.state.Department} onChange={this.changeHandler}></input><br/>
          <label htmlFor="">Rating:</label>
          <input className='form' type="number" name="Rating" value={this.state.Rating} onChange={this.changeHandler}></input><br/>
          <button id='btn' onClick={this.submitHandler} type="">Submit</button>
        </form>
     </div>

      <div className='flex'>
          {this.state.employee.map((value,index)=>{
            return(
              
              <div className='box'> Name: {value.Name} <br/><br/> Department: {value.Department} <br/><br/> Rating:{value.Rating}</div>
            )

          })}
        </div>
      </div>
    )
  }
}