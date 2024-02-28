// import logo from './logo.svg';
import './App.css';
import {useState,useRef} from 'react'
function App() {
  const [student, updateStudent] = useState([
    {
        rollno:1001,
        name:"Vikram",
        branch:"CS",
        mobile:9878996754
    },
    {
        rollno:1002,
        name:"Nakul",
        branch:"IT",
        mobile:9878996714
    },
    {
        rollno:1003,
        name:"Raghav",
        branch:"MECH",
        mobile:9874996754
    },
    {
        rollno:1004,
        name:"Bhawesh",
        branch:"CS",
        mobile:9878696754
    },{
        rollno:1005,
        name:"Cheeku",
        branch:"IT",
        mobile:9878926754
    }
    ]);
    const [defaultBranch,updateBranch] = useState('all')
    let nameValue= useRef(null);
    let rollValue = useRef(null);
    let branchValue = useRef(null);
    let mobileValue = useRef(null);

  const addStudent = ()=>{
    let name = nameValue.current.value;
    let rollno = rollValue.current.value;
    let branch = branchValue.current.value;
    let mobile = mobileValue.current.value;
    let newStudent = {name,rollno,branch,mobile};
    console.log(name,rollno,branch,mobile,newStudent)
    let studentdata = [...student,newStudent]
    updateStudent(studentdata)
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
    <div className='container form-group'>
        <div className='row'>
          <div className='col-md-6'>
              <input ref={nameValue} className='form-control' placeholder='enter your name '/>
          </div>
          <div className='col-md-6'>
              <input ref={rollValue} className='form-control' placeholder='enter your roll no '/>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-6'>
              <select ref={branchValue} className='form-control'>
                <option>CS</option>
                <option>MECH</option>
                <option>EC</option>
                <option>IT</option>
              </select>
          </div>
          <div className='col-md-6'>
              <input ref={mobileValue} className='form-control' placeholder='enter your mobile no '/>
          </div>  
        </div>
      <button onClick={()=>addStudent()} className='btn btn-success mt-2'>ADD</button>
      </div>
      <div className='container mt-2'>
      <button onClick={()=>addBranch('CS')} className='btn btn-primary'>CS ({student.filter(data=>data.branch==='CS').length})</button>
      <button onClick={()=>addBranch('CIVIL')}  className='btn btn-info m-2'>CIVIL ({student.filter(data=>data.branch==='CIVIL').length})</button>
      <button onClick={()=>addBranch('EC')} className='btn btn-success m-2'>EC ({student.filter(data=>data.branch==='EC').length})</button>
      <button onClick={()=>addBranch('MECH')} className='btn btn-danger m-2'>MECH ({student.filter(data=>data.branch==='MECH').length})</button>
      <button onClick={()=>addBranch('IT')} className='btn btn-dark m-2'>IT ({student.filter(data=>data.branch==='IT').length})</button>
      <button onClick={()=>addBranch('all')} className='btn btn-secondary m-2'>Total  ({student.length})</button>
      </div>
    <div className='container mt-3'>
      <table className='table border'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Roll No.</th>
            <th>Branch</th>
            <th>Mobile</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {student.filter((std)=>std.branch===defaultBranch || defaultBranch==='all').map((data,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.rollno}</td>
            <td>{data.branch}</td>
            <td>{data.mobile}</td>
            <td><button onClick={()=>deleteRecord(data.rollno)} className='btn btn-outline-danger'>Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </>
  );
}

export default App;
