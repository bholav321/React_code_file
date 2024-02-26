import {Component} from "react";

export default class AddStudent extends Component{
  render(){
    const {studentList , addNewRecord, updateBranch} = this.props;
    

    return<>
            <div className='container'>
        <div className='row'>
          <div className='form-group col-md-6 '>
            <input  ref={(roll)=>this.rollno=roll}  className='form-control' placeholder='Enter student rollno no.' />
          </div>
          <div className='form-group col-md-6'>
            <input  ref={(studentName)=>this.name=studentName} className='form-control' placeholder='Enter student name.' />
          </div>
        </div>
        <div className='row  mt-2'>
          <div className='form-group col-md-6'>
            <select ref={(branchInput)=>this.branch = branchInput}  className='form-control'>
              <option>Select branch</option>
              <option value={'IT'}>IT</option>
              <option value={'CS'}>CS</option>
              <option value={'MECH'}>MECH</option>
              <option value={'EC'}>EC</option>
            </select>
          </div>
          <div className='form-group col-md-6'>
            <input ref={(mobileInput)=>this.mobile = mobileInput} className='form-control' placeholder='Enter student mobile.' />
          </div>
        </div>
        <button onClick={()=>addNewRecord(this.rollno.value , this.name.value , this.branch.value , this.mobile.value)} className='bg-primary btn text-white mt-2'>Add </button>
        <div className='col-md-6 d-flex'>
        <button onClick={()=>updateBranch("CS")} className='btn btn-danger m-2'>CS({studentList.filter((student)=>student.branch==='CS').length})</button>
        <button onClick={()=>updateBranch("IT")} className='btn btn-secondary m-2'>IT({studentList.filter((student)=>student.branch==='IT').length})</button>
        <button onClick={()=>updateBranch("EC")} className='btn btn-primary m-2'>EC({studentList.filter((student)=>student.branch==='EC').length})</button>
        <button onClick={()=>updateBranch("MECH")} className='btn btn-success m-2'>MECH({studentList.filter((student)=>student.branch==='MECH').length})</button>
        <button onClick={()=>updateBranch("all")} className='btn btn-danger m-2'>Total({studentList.filter((student)=>student).length})</button>
      </div>
      </div > 
   </>
  }
}