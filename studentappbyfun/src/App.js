import {Component} from 'react';
import Data from './data';
class App extends Component {
    constructor(){
      super();
      this.state = {
        studentList:Data,
      }
    }
    deleteRecord=(rollno)=>{
      let index = this.state.studentList.findIndex((data)=>data.rollno===rollno);
      this.state.studentList.splice(index,1);
      this.setState({studentList:[...this.state.studentList]});
    }
    addStudent = ()=>{
      let newStudent = {name:this.name.value,rollno:this.rollno.value,branch:this.branch.value,mobile:this.mobile.value}
      this.setState({studentList:[...this.state.studentList,newStudent]})
    }
    render(){
      
      return<>
      <div className='bg-danger container-fluid'>
        <h1 className='text-center text-white'> Student List</h1>
      </div>
      <div className='container form-group'>
        <div className='row'>
          <div className='col-md-6'>
              <input ref={(name)=>this.name = name} className='form-control' placeholder='enter your name '/>
          </div>
          <div className='col-md-6'>
              <input ref={(rollno)=>this.rollno = rollno} className='form-control' placeholder='enter your roll no '/>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-md-6'>
              <select ref={branch=>this.branch=branch} className='form-control'>
                <option>CS</option>
                <option>AB</option>
                <option>CD</option>
                <option>MECH</option>
                <option>EC</option>
                <option>IT</option>
              </select>
          </div>
          <div className='col-md-6'>
              <input ref={mobile =>this.mobile= mobile} className='form-control' placeholder='enter your mobile no '/>
          </div>  
        </div>
      <button onClick={this.addStudent} className='btn btn-success mt-2'>ADD</button>
      </div>
      <div className='container mt-5'>
        <table className='table'>
          <thead>
            <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Mobile</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.map((data,index)=><tr key={index}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.rollno}</td>
              <td>{data.branch}</td>
              <td>{data.mobile}</td>
              <td><button onClick={()=>this.deleteRecord(data.rollno)} className='btn-outline-danger btn'>Delete</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
      </>
    }
}
export default App;