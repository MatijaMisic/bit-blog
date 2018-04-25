import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostItem = (props) => {
    console.log(props);

    const deletePost = () => {
        axios.delete(`http://localhost:3000/posts/${props.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        props.fetchPosts();
    }

    const link = `/posts/${props.id}/${props.userid}`

    return (
        <div className="container">
            <div className="col s12 m12">
                <div className="card blue">
                    <div className="card-content white-text">
                        <span className="card-title"><Link to={link}>{props.title}</Link></span>
                        <p>{props.body}</p>
                        <i class="material-icons" onClick={deletePost}>delete</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PostItem }