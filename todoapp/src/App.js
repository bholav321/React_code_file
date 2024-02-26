
import './App.css';
import {Component} from 'react'
import taskList from './task'
class App extends Component{
  constructor(){
    super();
    this.state = {
      task:taskList,
      taskStatus:'Deactivate'
    } 
  }
  addTask = () =>{
      let date = new Date();
      let curruntDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      let newTask = {task:this.task.value, priority: this.priority.value, date : curruntDate,status:'Deactivate'}
      this.setState({task:[...this.state.task,newTask]})
  }
  changeStatus = (data) =>{
    // console.log(data);
    let updatetask = [...this.state.task];
    let index = this.state.task.findIndex(task=> task.task === data.task)
    // console.log(index);
    let value = data.status === 'Activate' ? 'Deactivate' : 'Activate' 
    updatetask[index].status = value;
    this.setState({updatetask})

  }
  render(){
    return <>
      <div className='container-fluid bg-danger'>
          <h2 className='text-white text-center p-2'>To Do App</h2>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-md-6 form-group'>
                  <input ref={(task)=>this.task = task} className='form-control' placeholder='Enter the task name'/>
              </div>
              <div className='col-md-6 form-group'>
                  <select ref={(priority)=>this.priority = priority}  className='form-control'>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                    <option value={'Low'}>Low</option>
                  </select>
              </div>
          </div>
          <button onClick={this.addTask}  className='bg-primary btn mt-2 text-white'>Add Task</button><br/>
          <button id='active' onClick={()=>this.setState({taskStatus:'Deactivate'})} className='bg-success btn text-white m-2'>Activate ({this.state.task.filter((value)=>value.status==='Deactivate').length})</button>
          <button onClick={()=>this.setState({taskStatus:'Activate'})} className='bg-danger btn text-white m-2'>Deactivate({this.state.task.filter((value)=>value.status==='Activate').length})</button>
      </div>
      <div className='container border'>
        <table className='table'>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Task</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.task.filter((arr)=>arr.status===this.state.taskStatus ).map((data,index)=><tr  key={index} className={data.priority==='Medium'?'bg-warning':data.priority === 'Low' ? 'bg-primary' : 'bg-danger'}>
              <td>{index+1}</td>
              <td>{data.task}</td>
              <td id='taskDate'>{data.date}</td>
              <td className={data.priority==='Medium'?'bg-warning text-white':data.priority === 'Low' ? 'bg-primary text-white' : 'bg-danger text-white'}>{data.priority}</td>
              <td><button  onClick={()=>this.changeStatus({...data})} className={data.status==='Activate' ? 'bg-success btn text-white':'bg-danger btn text-white'}>{data.status}</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  }
}

export default App;
// (taskStatus)=>taskStatus.status==="Deactivate" || taskStatus.status == this.state.taskStatus
