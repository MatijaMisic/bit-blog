import React from 'react';
import { Link } from 'react-router-dom'


const SinglePostLinks = (props) => {

    const link = `/posts/${props.id}/${props.authorId}`;

    return(
       <Link to={link}><li>Title: {props.id} - {props.title}</li></Link>
    )
}
   


export {SinglePostLinks};