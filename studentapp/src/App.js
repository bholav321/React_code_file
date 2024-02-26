// import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import student from './data';
import Student from './Components/studentTable';
import AddStudent from './Components/addStudent';
class App extends Component {
  constructor() {
    super();
    this.state = {
      studentList: student,
      studentBranch: 'all'
    }
  }
  addNewRecord=(rollno,name,branch,mobile)=>{
    let newStudent = {rollno, name, branch,mobile};
    this.setState({studentList:[...this.state.studentList,newStudent]})
  }
  updateBranch = (branch)=>{
    this.setState({studentBranch:branch});
  }
  deleteRecord=(rollno)=>{
    let index = this.state.studentList.findIndex((student)=>student.rollno===rollno);
    this.state.studentList.splice(index,1);
    this.setState({studentList:[...this.state.studentList]});
  }
  render() {
    return <>
      <div className='container-fluid bg-danger'>
        <h4 className='text-white text-center'>Student List</h4>
      </div>
      <AddStudent studentList={this.state.studentList} addNewRecord = {this.addNewRecord} updateBranch = {this.updateBranch} />
      <div className='container mt-2'>
        <Student studentList={this.state.studentList} studentBranch={this.state.studentBranch} deleteRecord={this.deleteRecord}/>
      </div>
    </>
  }
}

export default App;
