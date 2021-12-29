import React,{useState,useContext} from 'react'
import { UserContext } from '../../context/user'
import { db } from '../../firebase'
import './style.css'

export default function CommentInput({id,comments}) {
    const [user, setUser] =  useContext(UserContext).user;
    const [commentInput, setCommentInput] = useState("");
    const [com, setCom] = useState(comments? comments:[]);
    const onhandlecommentPost=()=>{
        if(commentInput !=""){
            com.push({
                username:user.email.replace("@gmail.com",""),
                comment:commentInput
            });
            db.collection("posts").doc(id).update(
                               {comments:com} 
                
            );
            setCommentInput("")
        }
        
    }
    return (
        <div className="commentInput">
            <textarea className="commentInput_text"
            rows="1"
            value={commentInput}
            placeholder="comment something"
            onChange={(e)=>{setCommentInput(e.target.value)}}></textarea>
            <button onClick={onhandlecommentPost}>post</button>
        </div>
    )
}
