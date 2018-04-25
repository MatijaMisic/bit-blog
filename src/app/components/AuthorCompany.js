import React from 'react';

const AuthorCompany = (props) => {

    return (
        <div className="col s12 m7">
            <div className="card blue">
                <div className="card-content white-text">
                    <span className="card-title">Company</span>
                    <p>name: {props.company}</p>
                    <p>slogan: {props.slogan}</p>
                </div>
            </div>
        </div>
    )

}

export { AuthorCompany };