import React,{useState,useEffect} from 'react'
import { Posts } from '..'
import { db } from '../../firebase'
import './style.css'


export default function Feed() {
    const [feed, setFeed] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot)=>{
            setFeed(snapshot.docs.map((doc)=> ({
                id:doc.id,post: doc.data()
            })));
        });
    }, []);
    

    return (
        <div className="feed">
            
            {feed.map(({id,post})=>{
                return <Posts
                key={id}
                id={id}
                profileURL={post.profileURL}
                userName={post.username}
                imageURL={post.imageURL}
                content={post.caption}
                comments={post.comments}/>

            })}
        </div>
    )
}
