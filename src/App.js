import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      search:"",
      list:[]
    }
  }
  onChange=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  onClick=()=>{
    axios.get(`https://api.foursquare.com/v2/venues/search?client_id=JEZLSXOIH50FHDXUNJ0D4SULGO0K0EOVH2R222FHCDEBMU5U&client_secret=FSBTUBZRIEAVSQVUZVGL03QFKTXGUZK1RONJTNDAGCO0RAEC&ll=40.7,-74&query=${this.state.search}&v=20210430`)
    .then((response)=>{
      this.setState({
        list:response.data.response.venues
      })
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  render() {
    return (
      <div style={{margin:"20px" ,width:"300px" }}>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" name="search" placeholder="Please enter the name of the food" onChange={this.onChange} value={this.state.search}/>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.onClick}>Submit</button>
        </form>
        <br/>
        <ul className="list-group list-group-flush">
          {this.state.list.map((value)=>{
            return(
              <li className="list-group-item" key={value.id}>{value.name} - {value.location.address}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
