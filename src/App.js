import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todo:"",
      description:"",
      list:[]
    }
  }
onChange=(event)=>{
  this.setState({
    [event.target.name]:event.target.value
  })
}

onClick=(e)=>{
  e.preventDefault();
  const data={
    todo:this.state.todo,
    description:this.state.description
  }
  const newList=this.state.list
  newList.push(data)
  this.setState({
    list:newList
  })
}
  render() {
    return (
      <div style={{margin:"50px",width:"300px"}}>
          <form>
            <div className="mb-3">
              <label className="form-label">todo:</label>
              <input type="text" className="form-control" id="exampleInputEmail1" name="todo" onChange={this.onChange} value={this.state.todo} />
            </div>
            <div className="mb-3">
              <label className="form-label">description:</label>
              <input type="text" className="form-control" id="exampleInputEmail1" name="description" onChange={this.onChange} value={this.state.description}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.onClick}>Add</button><br/><br/>
            <ul className="list-group">
              {this.state.list.map((value,index)=>{
                return(
                  <li className="list-group-item list-group-item-info" key={index}>{value.todo} - {value.description}</li>
                )
              })}
            </ul>
          </form>    
      </div>
    )
  }
}


