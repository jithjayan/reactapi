import { useEffect, useState } from "react"
import axios from 'axios'

function TaskList(){
    const [data,setData]=useState([])
    const [editing,setEditing]=useState(false)
    const [editDtls,setEditDtls]=useState({id:'',title:'',dis:''})
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/task/').then(res=>{
            console.log(res.data);
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])
    const edittask =(task)=>{
        setEditing(true)
        setEditDtls(task)
    }
    return(
        <>
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Disp</th>
                </tr>
            </thead>
            <tbody>
                {data.map((value,index)=>(
                    <tr key={index}>
                        <td>{value.title}</td>
                        <td>{value.dis}</td>
                        <td><button onClick={()=>{edittask(value)}} className="btn btn-secondary">Edit</button></td>
                        <td><button onClick={()=>{}} className="btn btn-danger">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        {editing ? <EditForm curTask={editDtls}/>:null}
        </div>
        </>
    )
}

const EditForm=({curTask})=>{
    console.log('EditForm',curTask);
    const [task,setTask]=useState(curTask)
    return(
        <>
        <form >
            <input type="text" name="task" id="task" value={task.title}/>
            <input type="text" name="dis" id="dis" value={task.dis}/>
            <input type="submit" value="update" />
        </form>
        </>
    )
}

export default TaskList