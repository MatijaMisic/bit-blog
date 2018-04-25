import React from 'react';

const AuthorAddress = (props) => {
    console.log(props.long.lng);
    const imgSrc = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDXFoylTWv6otjIzFeENi-rFfoaWifIa2A&q=${props.long.lat},${props.long.lat}&center=${props.long.lat},${props.long.lat}`
    return (
        <div className="col s12 m7">
            <div className="card horizontal blue">
                <div className="card-stacked">
                    <div className="card-content white-text">
                        <h5>Address</h5>
                        <p>street: {props.street}</p>
                        <p>city: {props.city}</p>
                        <p>zipcode: {props.zipcode}</p>
                    </div>
                </div>
              
                    <iframe
                        width="300"
                        height="200"
                        frameBorder="0"
                        title="mapa"
                        src={imgSrc} allowFullScreen>     
                    </iframe>
                </div>
            </div>
    )

}

export { AuthorAddress };