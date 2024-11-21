import "./add.css"
function Addnote(){
    return <div className="addcontainer">
       <h2 className="addtag">Have too many tasks to do ?😫</h2>
       <h2 className="subtag">No worries add them here 👇</h2>
       <div className="form">
       <label>Task title :</label>
       <input type="text"></input>
       <br/>
       <label>Task description :</label>
       <input type="text"></input>
       <button type="button" className="addtaskbtn">Add Task</button>

       </div>
       

    </div>
}
export default Addnote;