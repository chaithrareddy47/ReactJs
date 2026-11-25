import { Component } from "react";

class User extends Component{
  constructor() {
    console.log("child constructor called");
    
    super()
  
  }
  componentDidMount() {
    console.log("child componenet did mount called");
    
  }
  render() {
    console.log("child render called");
    
    return (
      <div>
        
    </div>
  )
}
}
export default User
