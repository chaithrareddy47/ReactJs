import React, { Component } from 'react'
import User from './User'

class About extends Component{
  constructor(props) {
    super(props)
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent compoenent did mount");
    
  }
  render() {
    console.log("parent render called");
    return (
      <div>
        <User/>
        <User/>
      </div>
    )
    
  }

}

export default About
