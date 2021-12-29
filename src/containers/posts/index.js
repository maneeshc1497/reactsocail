import React,{useContext} from 'react'
import { Comment, CommentInput } from '../../components'
import { UserContext } from '../../context/user'
import { db, storage } from '../../firebase'
import './style.css'
export default function Posts({
    id,
    profileURL,
    userName,
    imageURL,
    content,
    comments
}) {
    const deletePost=()=>{
         storage.refFromURL(imageURL).delete();
         db.collection("posts").doc(id).delete();
    }

    return (
        <div className="posts">
            <div className="posts_header">
                <div className="posts_headerleft">
                <img src={profileURL} alt=""></img>
                <p style={{fontWeight:"600"}}> {userName}</p>
                </div>
                <div className="posts_headerright"> 
                    <button onClick={deletePost}>Delete</button>
                </div>
            </div>
            <div className="posts_Center">
                <img src={imageURL} alt=""/>
            </div>
            <div>
            <p >
                <span style={{fontWeight:"600",marginRight:"4px"}}>{userName}</span>
                {content}</p>
            </div>
            {comments ? comments.map((comment)=>
            <Comment username={comment.username} comment={comment.comment}/>): <></>}
            <CommentInput id={id} comments={comments}/>
        </div>
    )
}
