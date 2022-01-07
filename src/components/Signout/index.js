import React,{useContext} from 'react'
import { UserContext } from '../../context/user';
import { logOut } from '../../services/auth';
import './style.css'

export default function Signout() {
const [user, setUser] = useContext(UserContext).user;
const Signout = async () =>{
    let userBySignout=  await logOut();
     if(userBySignout) setUser(null);
}

    return (
        <div className="signOutBtn" onClick={Signout}>
            <p>Sign out</p>
        </div>
    )
}
