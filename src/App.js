import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
  }
  fetchData=()=>{
    axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then((response)=>{
      this.setState({
        list:response.data.data
      })
    }).catch((error)=>{
      console.log(error)
    })
  }
  componentDidMount=()=>{
    this.fetchData();
  }
  onClick=()=>{
    this.fetchData();
  }
  render() {
    return (
      <div style={{margin:"50px",width:"350px"}}>
        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Quotes Generator</h5>
            <div className="card-text">{this.state.list.map((value,index)=>{
              return(
                <p key={index}>Genre: {value.quoteGenre}<br/>Author: {value.quoteAuthor}<br/>{value.quoteText}</p>
              )
            })}</div>
            <button type="button" className="btn btn-success" onClick={this.onClick}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}
