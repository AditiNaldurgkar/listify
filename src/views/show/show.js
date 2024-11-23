import "./show.css"
import toast,{Toaster} from "react-hot-toast";

function Displaynotes() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));   

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
function deletenote(index){
    const tasks = JSON.parse(localStorage.getItem("tasks"))||[];   
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    toast.success("deleted task successfully");
    window.location.reload();
    }


function Shownote() {
    toast.success("task loaded successfully");
    return (
        <div className="bodyshow">
            <h1 className="taglineshow">Here are your tasks for the day!</h1>
            <Displaynotes />
            <Toaster/>
        </div>
       
    );
}

export default Shownote;