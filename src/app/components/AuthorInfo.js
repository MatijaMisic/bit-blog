import React from 'react';
import img from '../../img/author.jpg'
const AuthorInfo = (props) => {
    
    return (
        <div className="col s12 m7">
            <div className="card horizontal blue">
                <div className="card-image">
                    <img src={img} alt=""/>
                </div>
                <div className="card-stacked">
                    <div className="card-content white-text">
                        <h5>{props.name}</h5>
                        <p>username: {props.username}</p>
                        <p>email: {props.email}</p>
                        <p>phone: {props.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export { AuthorInfo };