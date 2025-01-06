import { useEffect, useState } from "react"
import axios from 'axios'

function TaskList(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/task/').then(res=>{
            console.log(res.data);
            setData(res.data)
        }).catch(error=>console.log(error.message))
    },[])
    return(
        <>
        <table>
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
                        <td><button onClick={()=>{}} class="btn btn-secondary">Edit</button></td>
                        <td><button onClick={()=>{}} class="btn btn-danger">Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default TaskList