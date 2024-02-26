import {Component} from 'react'
class Student extends Component{
    render(){
        const {studentList,studentBranch,deleteRecord} = this.props;
        console.log(studentList)
        return<>
         <table className='table border'>
          <thead>
            <tr className='border'>
              <th>Sr. No.</th>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Branch</th>
              <th>Mobile</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {studentList.filter((student)=>student.branch===studentBranch || studentBranch==='all').map((data, index) => <tr key={index} className='border'>
              <td>{index + 1}</td>
              <td>{data.rollno}</td>
              <td>{data.name}</td>
              <td>{data.branch}</td>
              <td>{data.mobile}</td>
              <td><button onClick={()=>deleteRecord(data.rollno)} className='btn btn-outline-danger'>Delete</button></td>
            </tr>)}
          </tbody>
        </table>
        </>
    }
}

export default Student;