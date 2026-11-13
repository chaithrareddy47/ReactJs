

const StudentList = ({ studentList }) => {
    const [names] = studentList;
  return (
    <div>
          {
              studentList.map((data) => (
                  <p>{data }</p>
              ))
          }
    </div>
  )
}

export default StudentList
