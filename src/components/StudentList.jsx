import Student from './Student'
import '../styles/common.scss'
const students = [
  { name: 'John Doe', age: 20, grade: 'A' },
  { name: 'Jane Smith', age: 22, grade: 'B' },
]
const StudentList = () => {
  return (
    <div>
      <h2>Student List</h2>
      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index}>
            <Student student={student} />
            <h1>{index}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StudentList
