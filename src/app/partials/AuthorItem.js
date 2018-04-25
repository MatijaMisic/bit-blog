import React from 'react';
import { Link } from 'react-router-dom';

const AuthorItem = (props) => {

    const link = `/authors/1/${props.id}`


    return(
    <div className="container">
        <div className="col s12 m12" id={props.id}>
            <div className="card blue">
                <div className="card-content white-text">
                <Link to={link}> <span className="card-title">{props.name}</span> </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export { AuthorItem };