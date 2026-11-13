

const Profile = (props) => {
    const {name, age, city } = props;
  return (
    <div>
          <h1>{name}</h1>
          <p>Age: {age}</p>
          <p>City:{ city}</p>
    </div>
  )
}

export default Profile
