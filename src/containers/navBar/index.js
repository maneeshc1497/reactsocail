import React,{useContext} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../context/user'
import './style.css'

function Navbar() {
    const [user, setUser] =useContext(UserContext).user;
    console.log(user);
    return (
        <div className="navbar">
            <h3 className="logo">React Social</h3>            
            {user ? <img className="navbar_img" src={user.photoURL}/>:<SignInBtn />}
        </div>
    )
}

export default Navbar
