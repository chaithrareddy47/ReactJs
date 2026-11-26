import { Component, use } from "react";

class User extends Component{
  
 
  render() {
    console.log("child render called");
    const { userInfo } = this.props;
    console.log(userInfo);
    
    
    return (
      <div className="about-page">
        <div className="about-heading">
          <h2>About Me</h2>

          <a
            href={userInfo?.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="about-desc-box">
          <div className="about-desc">
            <img src={userInfo?.avatar_url} />
            <div className="about-description">
              <h4>{userInfo?.name}</h4>
              <p>@ {userInfo?.login}</p>
            </div>
          </div>
          <p className="bio">{userInfo?.bio}</p>
          <hr/>
        </div>
      </div>
    );
}
}
export default User
