import img1 from "../assets/flyingcuphead.gif";
import img6 from "../assets/movieroll2.png"
import "./Header.css"

const Navbar = () => {
  return(
    <div className="navbarcontainer" id="homego">
      <img className="img6" id="roll1" src={img6} alt="" />
      <img className="img1" src={img1} alt="" />
    </div>
  )
}

export default Navbar