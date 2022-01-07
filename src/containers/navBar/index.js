import React,{useContext} from 'react'
import { SignInBtn } from '../../components'
import  Signout  from '../../components/Signout/index'
import { UserContext } from '../../context/user'
import './style.css'

function Navbar() {
    const [user, setUser] =useContext(UserContext).user;
    console.log(user);
    return (
        <div className="navbar">
            <h3 className="logo">React Social</h3>            
            {user ? <Signout/>:<SignInBtn />}
            
        </div>
    )
}

export default Navbar
