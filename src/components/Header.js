
import { useState } from "react"
const Header = () => {
    const[btnNamereact, setbtnNamereact] = useState("Login")
    return (
        <div className='header'>
            <div>
                <img className='logo' src='https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={()=>{
                        btnNamereact === 'Login' 
                        ?setbtnNamereact("Logout")
                        :setbtnNamereact("Login")
                    }} className="login">{btnNamereact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header