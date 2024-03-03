
import {useRef} from 'react'
function Edit(props){
    let {student,dataForUpdate,updateStudent,updateDetail,setUpdateDetail} = props
    let name = useRef(null);
    let branch = useRef(null) ;
    let mobile = useRef(null);
    
    let update = ()=>{
        let index = student.findIndex(data=>data.rollno===dataForUpdate.rollno);
        let nameValue = name.current.value;
        let branchValue = branch.current.value;
        let mobileValue = mobile.current.value;
        let arr = [...student];
        arr[index].branch = branchValue;
        arr[index].mobile = mobileValue;
        let a =  window.confirm("Do you want to Update the Record?");
        if (a == true) {
            updateStudent(arr);
            updateDetail===false ? setUpdateDetail(true): setUpdateDetail(false);
        }
    }
    return<>
        <div className="container border form-group p-2">
            <h3 className="text-center">Edit Student Details</h3>
            <div className="row">
                <div className="col-md-12">
              
                <input ref={name} className="form-control mt-2" value={dataForUpdate.name}/>
              
                <input  className="form-control mt-2"  value={dataForUpdate.rollno}/>
              
                <select ref={branch} className='form-control mt-2' defaultValue={dataForUpdate.branch}> 
                    <option>IT</option>
                    <option>CS</option>
                    <option>MECH</option>
                    <option>CIVIL</option>
                    <option>EC</option>
                </select>
                <input ref={mobile} className="form-control mt-2" defaultValue={dataForUpdate.mobile}/>
                <button onClick={update} className="btn btn-success m-2">Submit</button>
                </div>
            </div>
        </div>
    </>
}
export default Edit;

