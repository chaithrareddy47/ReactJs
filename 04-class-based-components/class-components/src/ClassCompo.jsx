import { Component } from "react";

class ClassCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        count: 0,
        gitData:null
    };
  }
  handleBtn = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

    componentDidMount() {
        this.fetchProfile()
    }

    fetchProfile = async () => {
        const data = await fetch(
          "https://api.github.com/users/chaithrareddy47"
        );
        console.log(data);
        const response = await data.json()
        // console.log(response);
        this.setState({
            gitData: response,
        })
        
        
    }
    render() {
        const { gitData } = this.state;
        
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.state.count}</p>
            <button onClick={this.handleBtn}>+</button>
            <p>{gitData?.name}</p>
            <img src={gitData?.avatar_url} />
      </div>
    );
  }
}

export default ClassCompo
