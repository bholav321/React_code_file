function Table(props){
    let {student,deleteRecord,defaultBranch,changes} = props;
    return<>
    <table className='table border'>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Roll No.</th>
            <th>Branch</th>
            <th>Mobile</th>
            <th>Delete</th>
            <th>Change</th>
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
            <td><button className="btn btn-primary" onClick={()=>changes({...data})}>Edit</button></td>
          </tr>)}
        </tbody>
      </table>
    </>
}
export default Table;