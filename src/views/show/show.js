import "./show.css"
const tasks =[
    {title :"Finish revision of maths",type:"study"},
    {
        title:"buy fresh veggies",type:"daily work"
}]
function Displaynotes() {
    return tasks.map((task, index) => (
        <div key={index} className="taskcard">
            <h3>{task.title}</h3>
            <i>{task.type}</i>
            <br/>
            <button type="btn" className="delbtn">Delete</button>
        </div>
    ));
}

function Shownote() {
    return (
        <div className="bodyshow">
            <h1 className="taglineshow">Here are your tasks for the day!</h1>
            <Displaynotes />
        </div>
    );
}

export default Shownote;