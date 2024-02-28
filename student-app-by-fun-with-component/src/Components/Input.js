import {useRef} from 'react'
function Input(props){
    let {student,addStudent,addBranch} = props;
    let nameValue= useRef(null);
    let rollValue = useRef(null);
    let branchValue = useRef(null);
    let mobileValue = useRef(null);
return <>
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
      <button onClick={()=>addStudent(nameValue.current.value,rollValue.current.value,branchValue.current.value,mobileValue.current.value)} className='btn btn-success mt-2'>ADD</button>
      </div>
      <div className='container mt-2'>
      <button onClick={()=>addBranch('CS')} className='btn btn-primary'>CS ({student.filter(data=>data.branch==='CS').length})</button>
      <button onClick={()=>addBranch('CIVIL')}  className='btn btn-info m-2'>CIVIL ({student.filter(data=>data.branch==='CIVIL').length})</button>
      <button onClick={()=>addBranch('EC')} className='btn btn-success m-2'>EC ({student.filter(data=>data.branch==='EC').length})</button>
      <button onClick={()=>addBranch('MECH')} className='btn btn-danger m-2'>MECH ({student.filter(data=>data.branch==='MECH').length})</button>
      <button onClick={()=>addBranch('IT')} className='btn btn-dark m-2'>IT ({student.filter(data=>data.branch==='IT').length})</button>
      <button onClick={()=>addBranch('all')} className='btn btn-secondary m-2'>Total  ({student.length})</button>
      </div>
      </>
}
export default Input;