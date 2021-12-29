import React,{useContext} from 'react'
import { UserContext } from '../../context/user';
import { signInWithGoogle } from '../../services/auth';
import './style.css'

export default function SignInBtn() {
const [user, setUser] = useContext(UserContext).user;

const signInBtnClick = async () =>{
    let userBySignin= await signInWithGoogle();
    if(userBySignin) setUser(userBySignin);
}

    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            <p>Sign in with Google</p>
        </div>
    )
}
