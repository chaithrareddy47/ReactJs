import React, { Component } from 'react'
import User from './User'

class About extends Component{
  constructor(props) {
    super(props)
    // console.log("parent constructor called");

    this.state = {
      userInfo:null
    }
  }
  async componentDidMount() {
    // console.log("parent compoenent did mount");
    const data = await fetch("https://api.github.com/users/chaithrareddy47")
    const response = await data.json()
    console.log(response);

    this.setState({
      userInfo:response
    })
  }
  render() {
    
    return (
      <div>
        <User userInfo={this.state.userInfo } />
        
      </div>
    )
    
  }

}

export default About
