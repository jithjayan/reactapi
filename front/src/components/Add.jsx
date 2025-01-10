import {useState } from "react"
import axios from 'axios'

function Add(){
    const [title,setTitle]=useState('')
    const [dis,setDis]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/task/',{title,dis}).then((res)=>{
            setTitle('')
            setDis('')
        }).catch(error=>console.log(error.message))
    }

    return(
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" name="dis" id="dis"  value={dis} onChange={(e)=>setDis(e.target.value)} />
                <input type="submit" value="add"/>
            </form>
    )
}
export default Add
