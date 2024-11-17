import "./home.css"
import icon1 from "./icon1.png"
function Home(){
    return <div className="homebody">
        <img src={icon1} className="img1"></img>
        <div className="hometext">
        <h1 className="main-heading">Listify</h1>
        </div>
    </div>
}
export default Home;
