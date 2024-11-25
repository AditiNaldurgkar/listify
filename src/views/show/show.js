import { Link } from "react-router-dom";
import "./show.css"
import toast,{Toaster} from "react-hot-toast";
import home from "./../../house.png"
import { useEffect } from "react";
function Displaynotes() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));   
    useEffect(() => {
        toast.success("Task loaded successfully");
    }, []); 
    return tasks.map((task, index) => (
        <div key={index} className="taskcard">
            <h3>{task.title}</h3>
            <i>{task.desp}</i>
            <br/>
            <button type="btn" className="delbtn" onClick={()=>deletenote(index)}>Delete</button>
        </div>
    )
);
    
  
}
function deletenote(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTimeout(() => {
        window.location.reload();
    });
    toast.success("Deleted task successfully");
}



function Shownote() {
    return (
        <div className="bodyshow">
            <Link to="/"><img src={home} alt="homebtn" className="homebtn"></img></Link>
            <h1 className="taglineshow">Here are your tasks for the day!</h1>
            <Displaynotes />
            <Toaster/>
        </div>
       
    );
}

export default Shownote;