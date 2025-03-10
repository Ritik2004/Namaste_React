
import { useState,useContext } from "react"
import { Link } from "react-router"
import useOnlinestatus from "../utils/useOnlinestatus"
import UserContext from "../utils/UserContext"
const Header = () => {
    const[btnNamereact, setbtnNamereact] = useState("Login")
    const onlineStatus = useOnlinestatus();

    const data = useContext(UserContext);
    console.log(data)
    return (
        <div className='header'>
            <div>
                <img className='logo' src='https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status:{onlineStatus?"✅":"⛔"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        btnNamereact === 'Login' 
                        ?setbtnNamereact("Logout")
                        :setbtnNamereact("Login")
                    }} className="login">{btnNamereact}</button>
                    <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header