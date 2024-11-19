import "./show.css"
const tasks =[
    {title :"finish revision of maths",type:"study"},
    {
        title:"buy fresj veggies",type:"daily work"
}]

function Shownote(){
    return <div className="bodyshow">
         <h1 className="taglineshow">Here are your tasks for the day !</h1>

    </div>
}
export default Shownote;