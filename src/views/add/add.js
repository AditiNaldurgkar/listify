import { useState } from "react";
import "./add.css"
import toast ,{Toaster}from "react-hot-toast";

function Addnote(){
    const [title,setTitle] = useState("");
    const [desp,setDesp]=useState("");
    return <div className="addcontainer">
       <h2 className="addtag">Have too many tasks to do ?😫</h2>
       <h2 className="subtag">No worries add them here 👇</h2>
       <div className="form">
       <label>Task title :</label>
       <input type="text" onChange={(e)=>setTitle(e.target.value)}></input>
       <br/>
       <label>Task description :</label>
       <input type="text" onChange={(e)=>{setDesp(e.target.value)}}></input>
       <button type="button" className="addtaskbtn" onClick={addTask}>Add Task</button>
<Toaster/>
       </div>
    </div>
    function addTask(){
        const notes = JSON.parse(localStorage.getItem("tasks")) || [];
        const noteobj ={title,desp}
        notes.push(noteobj);
        localStorage.setItem( "tasks",JSON.stringify(notes));
        toast.success("Task added successfully");
    }
}

export default Addnote;