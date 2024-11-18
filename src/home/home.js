import "./home.css"
import icon1 from "./icon1.png"
function Home(){
    return <div className="homebody">
        <img src={icon1} className="img1"></img>
        <div className="bodyhome">
        <h1 className="main-heading">Listify</h1>
            <p>Hello everyone!!!!</p>
            <span> Introducing Listify ! An app helping to turn chaos into checkmarks!</span><br/>
            <button type="button" className="addbtn"> Add Note</button>
            <button type="button" className="showbtn">Show Note</button>
        </div>
    </div>
}
export default Home;
