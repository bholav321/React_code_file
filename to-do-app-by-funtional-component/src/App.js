import './App.css';
import TaskList from './data';
import {useState,useRef} from 'react'
function App() {
  const [taskList,updateTask] = useState(TaskList);
  const [taskStatus,updateTaskStatus] = useState('active');
  const [priorityList, updatePriority] = useState([{priorityId:1,priorityValue:'High'},{priorityId:2,priorityValue:'Medium'},{priorityId:3,priorityValue:'Low'}])
  const titleValue = useRef(null);
  const priorityValue = useRef(null);
  const addTask = ()=>{
      let title = titleValue.current.value;
      let pid = priorityValue.current.value;
      let status = 'active'
      let date = new Date();
      date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      const newTask = {title,pid,status,date};
      let arr = [...taskList,newTask]
      updateTask(arr);
    }

  const changeStatus = (data)=>{
    let arr = [...taskList];
    let index = taskList.findIndex(task=>task.title==data.title)
    let status = data.status==='active'?'deactive':'active';
    arr[index].status = status;
    updateTask(arr)
  }
  return (<>
    <div className='container-fluid bg-danger'>
      <h1 className='text-white text-center'>Task List</h1>
    </div>
    <div className='container form-group'>
      <div className='row'>
        <div className='col-md-6'>
          <input ref={titleValue} className='form-control' placeholder='Enter the task title'/>
        </div>
        <div className='col-md-6'>
        <select ref={priorityValue} className="form-control">
              {priorityList.map((priorityObj,index)=><option value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>)}
            </select>
        </div>
      </div>
        <button onClick={addTask} className='btn btn-primary m-2'>Add Task</button> <br/>
       <button onClick={()=>updateTaskStatus('active')} className='btn btn-success m-2'>Activate ({taskList.filter(task=>{return task.status==='active'}).length})</button>
       <button  onClick={()=>updateTaskStatus('deactive')} className='btn btn-danger m-2'>Deactivate ({taskList.filter(task=>{return task.status==='deactive'}).length})</button>
    </div>
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Task</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {taskList.filter(task=>task.status==taskStatus).sort((a,b)=>{return a.pid>b.pid?1:-1}).map((data,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>{data.title}</td>
            <td>{data.date}</td>
            <td>{priorityList.find((priorityObj)=>{return data.pid == priorityObj.priorityId}).priorityValue}</td>
            <td><button onClick={()=>changeStatus({...data})} className={data.status=='active'?'btn btn-outline-danger':'btn btn-outline-success'}>{data.status=='deactive'?'Active':'Deactive'}</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </>  
  );
}

export default App;
