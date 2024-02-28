// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import studentList from './studentList';
import Table from './Components/Table';
import Input from './Components/Input';
function App() {
  const [student, updateStudent] = useState(studentList);
    const [defaultBranch,updateBranch] = useState('all');

  const addStudent = (name,rollno,branch,mobile)=>{
    let newStudent = {name,rollno,branch,mobile};
    console.log(name,rollno,branch,mobile,newStudent);
    let studentdata = [...student,newStudent];
    updateStudent(studentdata);
  }
  
  const deleteRecord = (rollno)=>{
    let confirm = window.confirm("are you sure ?")
    if(confirm){
      let index = student.findIndex(data=>data.rollno===rollno);
      student.splice(index,1);
      let arr = [...student];
      updateStudent(arr);
    }
  }

  const addBranch = (branch)=>{
    updateBranch(branch);
  }

  return (<>
    <div className='container-fluid bg-danger'>
        <h1 className='text-white text-center'>Student List</h1>
    </div>
   <Input student = {student} defaultBranch = {defaultBranch} deleteRecord = {deleteRecord} addBranch = {addBranch} addStudent={addStudent}/>
    <div className='container mt-3'>
      <Table student = {student} defaultBranch = {defaultBranch} deleteRecord = {deleteRecord}/>
    </div>
  </>
  );
}

export default App;
