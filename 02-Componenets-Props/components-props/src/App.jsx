import Product from "./Product"
import Profile from "./Profile"
import StudentList from "./StudentList"

const students = ["Rahul", "Priya","Aman"]


const App = () => {

  return (
    <div>
  <Product name="pants"/>
      <Product name="tshirt" />
      <Profile name="Rahul" age={22} city="Banglore" />
      <StudentList studentList={ students} />
    </div>
  )
}

export default App
