import React from 'react'
import { SignInBtn } from '../../components'
import { CreatePost, Feed, NavBar } from '../../containers'
import { UserContext, UserContextProvider } from '../../context/user'
import './style.css'



export default function Home() {
    return (
        <UserContextProvider>
        <div className="home">
        <NavBar/>        
        <CreatePost/>
        <Feed/>
        </div>
        </UserContextProvider>
        
    )
}
