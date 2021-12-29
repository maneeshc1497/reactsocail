import React from 'react'

export default function Comment({username,comment}) {
    return (
        <div className="comment">
            <p >
                <span style={{fontWeight:"600",marginRight:"4px"}}>{username}</span>
                {comment}</p>
        </div>
    )
}
