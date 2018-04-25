import React from 'react';
import { Link } from 'react-router-dom'

const SinglePost = (props) => {
   
    const link =`/authors/${props.id}/${props.authorId}`
    return (
        <div className="card-content white-text center">
            <span className="card-title">{props.title}</span>
            <Link to={link}><span className="autorTitle"> {props.authorName}</span></Link>
            <p>{props.content}</p>
        </div>
    )
}

export { SinglePost };